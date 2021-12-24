import { VFC, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import {
    BackGroundWhite,
	CancelButton,
	Container,
	ContainerFlex,
    ContainerPositioned,
	GifGrid,
    Header,
    ImageCard,
    SearchBar,
    SearchIcon,
    Spinner,
} from 'components';
import { trendingGifs } from 'features';
import { API_PARAMS } from 'consts';

const Gifs: VFC = () => {
    const [state, setState] = useState({
        focused: false,
        inputValue: '',
    });
    const searchInputRef = useRef<HTMLInputElement | null>(null);

    const [search, setSearch] = useState(false)
    const { gifList } = useSelector( (state: RootState) => state);
    const { gifs, loadingGifList } = gifList;

    const handleSearch = () => {
        setSearch(!search);
    };

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

    const dispatch = useDispatch();

    useEffect(() => {
        const trendingGifReqParams = {
            api_key: process.env.REACT_APP_API_KEY ?? '',
            bundle: API_PARAMS.bundle,
            limit: API_PARAMS.limit,
            random_id: API_PARAMS.random_id,
        };

        dispatch(trendingGifs({ params: trendingGifReqParams, urlPath: 'trending' }))

    }, [dispatch]);

    return(
        <BackGroundWhite>
            <Container>
                <ContainerFlex>
                    <ContainerPositioned position='flex-start'><Header>Gifs Images</Header></ContainerPositioned>
                    {search &&
                        <ContainerPositioned position='center'>
                            <SearchBar inputValue={state?.inputValue} onChange={onChange} onClick={handleClearText} />
                        </ContainerPositioned>
                    }
                    {search &&
                        <ContainerPositioned position='flex-end'>
                            <CancelButton onClick={handleSearch}>Cancel</CancelButton>
                        </ContainerPositioned>
                    }
                    {!search && <ContainerPositioned position='flex-end'><SearchIcon onClick={handleSearch} /></ContainerPositioned>}
                </ContainerFlex>
                {
                    loadingGifList ?
                        <Spinner /> :
                        <GifGrid>
                            {
                                gifs.data.map(image => <ImageCard image={image?.images?.fixed_height?.url} title={image?.title} key={image?.id} />)
                            }
                        </GifGrid>
                }
            </Container>
        </BackGroundWhite>
    )
};

export { Gifs }
