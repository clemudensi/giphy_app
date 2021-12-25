import { VFC, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { BackGroundWhite, Container, Spinner } from 'components';
import { trendingGifs } from 'features';
import { API_PARAMS } from 'consts';
import { useDebounced } from 'hooks';
import { SearchHeader } from './search-header';
import { GifList } from './gif-list';

const Gifs: VFC = () => {
    const [state, setState] = useState({
        focused: false,
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
        setState(prevState => ({
            ...prevState,
            focused: false,
            inputValue: ''
        }));
        searchInputRef?.current?.blur();
        setSearch(!search);
    }, [search]);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(prevState => ({
            ...prevState,
            inputValue: event.target.value
        }))
    };

    const handleClearText = useCallback((): void => {
        setState({
            focused: true,
            inputValue: ''
        });
        searchInputRef?.current?.focus();
    }, []);

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
                    inputDebounced={inputDebounced}
                    onChange={onChange}
                    search={search}
                    state={state}
                />
                {
                    (gifs?.data?.length && !loadingGifList) ?
                    <GifList
                        gifs={gifs}
                        search={search}
                    /> : <Spinner />
                }
            </Container>
        </BackGroundWhite>
    )
};

export { Gifs };
