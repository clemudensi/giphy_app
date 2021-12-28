import React, { forwardRef } from 'react';
import {
    CancelButton,
    ContainerFlex,
    ContainerPositioned,
    Header,
    SearchBar,
    SearchIcon
} from 'components'

interface SearchHeaderProps {
    handleCancelSearch: () => void;
    handleClearText: () => void;
    handleSearch: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    search: boolean;
    state: {
        inputValue: string;
        focused?: boolean;
    }
}

const SearchHeader = forwardRef<HTMLInputElement, SearchHeaderProps>((_props, ref) => {
    const {
        handleCancelSearch,
        handleClearText,
        handleSearch,
        onChange,
        search,
        state
    } = _props

    return (
        <ContainerFlex>
            <ContainerPositioned position='flex-start'>
                <Header data-testid="gif-header">{state?.inputValue.length ? 'Searched Gif Images' : 'Trending Gif Images'}</Header>
            </ContainerPositioned>
            {search &&
                <ContainerPositioned position='center'>
                    <SearchBar inputValue={state?.inputValue} onChange={onChange} onClick={handleClearText} ref={ref}/>
                </ContainerPositioned>
            }
            {search &&
                <ContainerPositioned position='flex-end'>
                    <CancelButton onClick={handleCancelSearch} data-testid="cancel-search">Cancel</CancelButton>
                </ContainerPositioned>
            }
            {!search && <ContainerPositioned position='flex-end'><SearchIcon onClick={handleSearch} data-testid="search-icon" /></ContainerPositioned>}
        </ContainerFlex>
    )
});

export { SearchHeader };
