/* eslint-disable  */
import { fireEvent, render, screen } from '@testing-library/react';
import { Gifs } from '.';
import * as reduxRedux from 'react-redux';
import { gifs } from 'fixtures';

const mock =  function() {
    return {
      observe: jest.fn(),
      disconnect: jest.fn(),
      unobserve : jest.fn(),
    };
  };

window.IntersectionObserver = mock;

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

const useSelectorMock = reduxRedux.useSelector;
const useDispatchMock = reduxRedux.useDispatch;

const mockStore = {
    gifList: {
        gifs: gifs
    },
};

let getByTestId, queryAllByTestId, queryByPlaceholderText;

describe('<Gifs/>', () => {
    beforeEach(() => {
        useDispatchMock?.mockImplementation(() => () => {});
        useSelectorMock?.mockImplementation(selector => selector(mockStore));

        const component = render(
            <Gifs/>
        );
        getByTestId = component.getByTestId;
        queryAllByTestId = component.queryAllByTestId;
        queryByPlaceholderText = component.queryByPlaceholderText;
    });

    describe('Trending Gif', () => {
        it('render trending gifs', () => {
            expect(getByTestId('gif-images')).toBeInTheDocument();
            expect(getByTestId('gif-header')).toBeInTheDocument();
            expect(getByTestId('search-icon')).toBeInTheDocument();
            expect(screen.getByText(/Trending Gif Images/i)).toBeInTheDocument();
            expect(queryAllByTestId('trending-gif')).toHaveLength(gifs.data.length);
        });
    });

    describe('Search Gif', () => {
        beforeEach(() => {
            fireEvent.click(getByTestId('search-icon'));
            const input = queryByPlaceholderText('Search for gifs');
            fireEvent.change(input, {target: {value: 'cheese'}});
        });

        it('renders searched gifs', async () => {
            expect(screen.queryByPlaceholderText('Search for gifs')).toHaveValue('cheese');
            expect(screen.getByText(/Searched Gif Images/i)).toBeInTheDocument();
            expect(queryAllByTestId('search-gif-image')).toHaveLength(20);
        });

        it('cancels search and returns to fetches trending gifs', () => {
            expect(queryAllByTestId('search-gif-image')).toHaveLength(20);
            fireEvent.click(getByTestId('clear-text'));
            expect(screen.queryByPlaceholderText('Search for gifs')).toHaveValue('');
            fireEvent.click(getByTestId('cancel-search'));
            expect(queryAllByTestId('trending-gif')).toHaveLength(gifs.data.length);
        });
    });
});
