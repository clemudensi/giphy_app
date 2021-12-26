import { forwardRef } from 'react';
import {
    SearchCancelContainer,
    SearchContainer,
    SearchIcon,
    SearchIconContainer,
    SearchInput
} from 'components';
import { CancelIcon } from 'components';

interface SearchBarProps {
    inputValue: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
}

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>((_props, ref) => {
    const {
        inputValue,
        onChange,
        onClick
    } = _props;

    return(
        <SearchContainer>
            <SearchInput onChange={onChange} value={inputValue} ref={ref} />
            <SearchIconContainer><SearchIcon /></SearchIconContainer>
            <SearchCancelContainer><CancelIcon onClick={onClick} /></SearchCancelContainer>
        </SearchContainer>
    )
});

export { SearchBar };
