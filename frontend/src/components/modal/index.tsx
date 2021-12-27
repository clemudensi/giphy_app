import { FC } from 'react';
import {
    CancelIcon,
    CloseButton,
    ModalBody,
    ModalContainer,
    ModalContent,
    ModalHeader,
    ModalHeaderContainer,
    ModalSubContainer,
} from 'components';

interface ModalProps {
    handleCloseModal: () => void;
    imageId?: string;
    ModalHandle?: JSX.Element;
    modalId?: string;
    showModal: boolean;
    title: string;
}

const Modal: FC<ModalProps> = ({
    children,
    handleCloseModal,
    imageId,
    ModalHandle,
    modalId,
    showModal,
    title
}) => {
    return (
        <>
            {ModalHandle}
            {
                (modalId === imageId) && showModal &&
                <ModalContainer data-testid="gif-modal">
                    <ModalSubContainer>
                        <ModalContent>
                            <ModalHeaderContainer>
                                <ModalHeader>
                                    {title}
                                </ModalHeader>
                                <CloseButton>
                                    <CancelIcon
                                        onClick={handleCloseModal}
                                        height={20}
                                        width={20}
                                        data-testid="close-modal"
                                    />
                                </CloseButton>
                            </ModalHeaderContainer>
                            <ModalBody data-testid="modal-content">
                                {children}
                            </ModalBody>
                        </ModalContent>
                    </ModalSubContainer>
                </ModalContainer>
            }
        </>
    )
};

export { Modal };
