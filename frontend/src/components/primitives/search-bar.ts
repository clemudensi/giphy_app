import styled from 'styled-components';
import tw from 'twin.macro';

const SearchContainer = styled.div`
    ${tw`
        mt-1
        relative
        rounded-md
        shadow-sm
        container
        flex
        justify-center
        items-center
        flex-grow
    `}
`;

const SearchInput = styled.input`
    ${tw`
        h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-9 pr-6 sm:text-sm
    `}
`;

const SearchIconContainer = styled.div`
    ${tw`
        absolute inset-y-0 left-0 px-3 flex items-center pointer-events-none
    `}
`;

const SearchCancelContainer = styled.div`
    ${tw`
        absolute inset-y-0 right-0 flex items-center px-3
    `}
`;

const CancelButton = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: rgb(139 92 246);
    font-size: 1rem;
`;

export {
    CancelButton,
    SearchCancelContainer,
    SearchContainer,
    SearchIconContainer,
    SearchInput
};
