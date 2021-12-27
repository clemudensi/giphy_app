/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { fireEvent, render, screen } from '@testing-library/react';
import { SearchBar } from 'components';

const handleClearText = jest.fn();
const onChange = jest.fn();

const renderComponent = (inputValue) =>
    render(
        <SearchBar
            inputValue={inputValue}
            onChange={onChange}
            onClick={handleClearText}
        />
    );


describe('<Searchbar />', () => {
    it('renders without crashing', () => {
        const { getByTestId, queryByTestId } = renderComponent();
        expect(getByTestId('search-input')).toHaveValue('');
        expect(queryByTestId('clear-text')).toBeInTheDocument();
    });

    it('updates on change', () => {
        const { getByTestId } = renderComponent('cheese');
        expect(screen.getByTestId('search-input')).toHaveValue('cheese');
        fireEvent.click(getByTestId('clear-text'));
        expect(handleClearText).toBeCalled();
    });
});
