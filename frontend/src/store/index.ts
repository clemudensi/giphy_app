import { configureStore } from '@reduxjs/toolkit';
import { trendingGifReducer } from 'features';

export const store = configureStore({
    reducer: {
        gifList: trendingGifReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
