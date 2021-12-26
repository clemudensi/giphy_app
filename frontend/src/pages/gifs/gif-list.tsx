import { VFC, memo, useEffect, useMemo, useState } from 'react';
import { GifGrid, ImageCard, Modal } from 'components';
import { ApiResponseArray, GifProps } from 'types';
import { useInView } from 'react-intersection-observer';
import { GifDetail } from 'components/cards/card-details';
import { removeDuplicates } from 'utils';

interface GifListProps {
    gifs: ApiResponseArray<GifProps>;
    search: boolean;
}

const GifList: VFC<GifListProps> = ({
    gifs,
    search,
}) => {
    const uniqGifs = useMemo(() => removeDuplicates(gifs.data, 'id'), [gifs.data]);

    const initialState = uniqGifs.slice(0, 20)
    const [gifScrollList, setGifScrollList] = useState<GifProps[]>(initialState);
    const [imageId, setImageId] = useState('');
    const [page, setPage] = useState(1);
    const [showModal, setShowModal] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0,
    });

    const handleCloseModal = () => {
        setShowModal(false)
    };

    const handleShowModal = (imageId: string) => {
        setImageId(imageId);
        setShowModal(true);
    };

    useEffect(() => {
        const pageLength = Math.ceil(uniqGifs.length/20);

        if (inView && page <= pageLength) {
            const newPage = page + 1;

            setGifScrollList(() => [
                ...uniqGifs.slice(0, newPage*20)
            ]);
            setPage(newPage);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gifs.data, inView]);

    return (
        <GifGrid>
            {
                !search ?
                uniqGifs.map(gif =>
                    <Modal
                        handleCloseModal={handleCloseModal}
                        imageId={imageId}
                        ModalHandle={
                            <ImageCard
                                image={gif?.images.fixed_height?.url}
                                title={gif?.title} key={gif?.id}
                                onClick={() => handleShowModal(gif?.id)}
                            />
                        }
                        modalId={gif?.id}
                        showModal={showModal}
                        title={gif?.title}
                        key={gif?.id}
                    >
                        <GifDetail
                            image={gif}
                        />
                    </Modal>
                ) :
                gifScrollList.map((gif, index) => {
                    if (index === gifScrollList.length - 1) {
                        return (
                            <Modal
                                handleCloseModal={handleCloseModal}
                                imageId={imageId}
                                ModalHandle={
                                    <div ref={ref}  key={gif?.id}>
                                        <ImageCard
                                            image={gif?.images['480w_still']?.url ?? gif?.images.fixed_height?.url}
                                            title={gif?.title}
                                            onClick={() => handleShowModal(gif?.id)}
                                        />
                                    </div>
                                }
                                modalId={gif?.id}
                                showModal={showModal}
                                title={gif?.title}
                                key={gif?.id}
                            >
                                <GifDetail
                                    image={gif}
                                />
                            </Modal>
                        )
                    }
                    return <Modal
                                handleCloseModal={handleCloseModal}
                                imageId={imageId}
                                ModalHandle={
                                    <ImageCard
                                        image={gif?.images['480w_still']?.url ?? gif?.images.fixed_height?.url}
                                        title={gif?.title} key={gif?.id}
                                        onClick={() => handleShowModal(gif?.id)}
                                    />
                                }
                                modalId={gif?.id}
                                showModal={showModal}
                                title={gif?.title}
                                key={gif?.id}
                            >
                                <GifDetail
                                    image={gif}
                                />
                            </Modal>

                })
            }
        </GifGrid>
    )
};

export const MemoizeGifList = memo(GifList);
