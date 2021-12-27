import { fireEvent, render, screen } from '@testing-library/react';
import { ImageCard, Modal } from 'components';
import { gifs } from 'fixtures';

const handleCloseModal = jest.fn();
const handleShowModal = jest.fn();
const modalTitle = gifs.data[0].title;

const gif = gifs.data[0]

const renderComponent = () =>
    render(
        <Modal
            handleCloseModal={handleCloseModal}
            imageId={gifs.data[0]?.id}
            ModalHandle={
                <ImageCard
                    image={gif?.images.fixed_height?.url}
                    title={gif?.title}
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                    onClick={() => handleShowModal(gif?.id)}
                    data-testid="search-gif-image"
                />
            }
            modalId={gifs.data[0]?.id}
            showModal={true}
            title={modalTitle}
        />
    );

describe('<Modal />', () => {
    it('opens and closes modal with content', () => {
        const { getByTestId, queryByTestId } = renderComponent();
        fireEvent.click(getByTestId('search-gif-image'));
        expect(queryByTestId('gif-modal')).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: /Happy Birthday GIF/i})).toBeInTheDocument();
        expect(queryByTestId('close-modal')).toBeInTheDocument();
        fireEvent.click(getByTestId('close-modal'));
        expect(handleCloseModal).toBeCalled();
    });
});
