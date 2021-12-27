import { removeDuplicates } from './general';

describe('Remove duplicate', () => {
    it('return unique values', () => {
        const arr = [{id: 1, name: 'one'}, {id: 2, name: 'two'}, {id: 1, name: 'one'}];
        const unique_value = removeDuplicates(arr, 'id');
        expect(unique_value).toEqual([{id: 1, name: 'one'}, {id: 2, name: 'two'}]);
    })
});
