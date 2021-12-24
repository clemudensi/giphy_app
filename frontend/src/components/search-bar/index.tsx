import { VFC } from 'react';
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

const SearchBar: VFC<SearchBarProps> = ({ inputValue, onChange, onClick }) => {
    return(
        <SearchContainer>
            <SearchInput onChange={onChange} value={inputValue} />
            <SearchIconContainer><SearchIcon /></SearchIconContainer>
            <SearchCancelContainer><CancelIcon onClick={onClick} /></SearchCancelContainer>
        </SearchContainer>
    )
};

export { SearchBar };
