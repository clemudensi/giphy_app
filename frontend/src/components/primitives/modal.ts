import styled from "styled-components";
import tw from 'twin.macro';

const ModalContainer = styled.div`
    ${tw`
        justify-center
        items-center
        flex
        overflow-x-hidden
        overflow-y-auto
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        bg-zinc-700/50
    `}
`;

const ModalSubContainer = styled.div`
    ${tw`
        relative w-auto mx-auto max-w-3xl
    `}
    width: 45rem;
`;

const ModalContent = styled.div`
    ${tw`
        border-0
        rounded-lg
        shadow-lg
        relative
        flex
        flex-col
        w-full
        bg-white
        outline-none
        focus:outline-none
    `}
`;

const ModalHeaderContainer = styled.div`
    ${tw`
        flex items-start
        justify-between
        p-4 border-b
        border-solid
        border-blueGray-200
        rounded-t
    `}
`;

const ModalHeader = styled.h3`
    ${tw`
        text-xl font-semibold
        p-1 m-0
    `}
`;

const CloseButton = styled.span`
    ${tw`
        p-1 ml-auto
        bg-transparent
        border-0
        text-black
        float-right
        text-3xl
        leading-none
        font-semibold
        outline-none
        focus:outline-none
    `}
`;

const ModalBody = styled.div`
${tw`
relative flex-auto
    `}
`;

export {
    CloseButton,
    ModalBody,
    ModalContainer,
    ModalContent,
    ModalHeader,
    ModalHeaderContainer,
    ModalSubContainer
};
