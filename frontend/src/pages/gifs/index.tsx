import { VFC, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { BackGroundWhite, Container, NotFoundHeader, Spinner } from 'components';
import { trendingGifs } from 'features';
import { API_PARAMS } from 'consts';
import { useDebounced } from 'hooks';
import { SearchHeader } from './search-header';
import { MemoizeGifList } from './gif-list';

const Gifs: VFC = () => {
    const [state, setState] = useState({
        inputValue: '',
    });

    const searchInputRef = useRef<HTMLInputElement | null>(null);
    const [search, setSearch] = useState(false)
    const { gifList } = useSelector( (state: RootState) => state);
    const { gifs, loadingGifList } = gifList;

    const dispatch = useDispatch();
    const inputDebounced = useDebounced(state?.inputValue, 500);

    const handleSearch = () => {
        setSearch(!search);
    };

    const handleCancelSearch = useCallback((): void => {
        setSearch(!search);
        setState({
            inputValue: ''
        });
    }, [search]);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            inputValue: event.target.value
        })
    };

    const handleClearText = useCallback((): void => {
        setState({inputValue: ''});

        searchInputRef?.current?.focus();
    }, []);

    //handles input focus on search
    useEffect(() => {
        search && searchInputRef?.current?.focus();
    }, [search]);

    useEffect(() => {
        const searchGifReqParams = {
            api_key: process.env.REACT_APP_API_KEY ?? '',
            q: inputDebounced,
            random_id: API_PARAMS.random_id,
        };

        const trendingGifReqParams = {
            api_key: process.env.REACT_APP_API_KEY ?? '',
            bundle: API_PARAMS.bundle,
            limit: API_PARAMS.limit,
            random_id: API_PARAMS.random_id,
        };

        const urlPath = inputDebounced.length ? 'search' : 'trending';
        const params = inputDebounced.length ? searchGifReqParams : trendingGifReqParams

        dispatch(trendingGifs({ params, urlPath }))

    }, [dispatch, inputDebounced]);

    return(
        <BackGroundWhite>
            <Container>
                <SearchHeader
                    handleCancelSearch={handleCancelSearch}
                    handleClearText={handleClearText}
                    handleSearch={handleSearch}
                    onChange={onChange}
                    search={search}
                    state={state}
                    ref={searchInputRef}
                />
                {
                    (gifs?.data?.length && !loadingGifList) ?
                    <MemoizeGifList
                        gifs={gifs}
                        search={search}
                    /> : (loadingGifList ? <Spinner /> : <NotFoundHeader>No Gifs Found</NotFoundHeader>)
                }
            </Container>
        </BackGroundWhite>
    )
};

export { Gifs };
