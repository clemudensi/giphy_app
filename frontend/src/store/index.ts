import { configureStore } from '@reduxjs/toolkit';
import { gifImageReducer, trendingGifReducer } from 'features';

export const store = configureStore({
    reducer: {
        gifImage: gifImageReducer,
        gifList: trendingGifReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
