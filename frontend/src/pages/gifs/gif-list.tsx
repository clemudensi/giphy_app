import { VFC, useEffect, useState } from 'react';
import { GifGrid, ImageCard } from 'components';
import { ApiResponseArray, GifProps } from 'types';
import { useInView } from 'react-intersection-observer';

interface GifListProps {
    gifs: ApiResponseArray<GifProps>;
    search: boolean;
}

const GifList: VFC<GifListProps> = ({
    gifs,
    search,
}) => {
    const initialState = gifs.data.slice(0, 20)
    const [gifScrollList, setGifScrollList] = useState<GifProps[]>(initialState);
    const [page, setPage] = useState(1);
    const { ref, inView } = useInView({
        threshold: 0,
    });

    useEffect(() => {
        const pageLength = Math.ceil(gifs.data.length/20);

        if (inView && page <= pageLength) {
            const newPage = page + 1;

            setGifScrollList(() => [
                ...gifs.data.slice(0, newPage*20)
            ]);
            setPage(newPage);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gifs.data, inView]);

    return (
        <GifGrid>
            {
                !search ?
                gifs.data.map(gif => <ImageCard image={gif?.images?.fixed_height?.url} title={gif?.title} key={gif?.id} />) :
                gifScrollList.map((gif, index) => {
                    if (index === gifScrollList.length - 1) {
                        return (
                            <div ref={ref}  key={gif?.id}>
                                <ImageCard image={gif?.images?.fixed_height?.url} title={gif?.title} />
                            </div>
                        )
                    }
                    return <ImageCard image={gif?.images?.fixed_height?.url} title={gif?.title} key={gif?.id} />
                })
            }
        </GifGrid>
    )
};

export { GifList };
