import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { gifApis } from 'api';
import { ApiResponseArray, GifApiParams, GifProps } from 'types';

interface GifState extends GifApiParams {
    hasErrors: boolean;
    loadingGifList: boolean;
    gifs: ApiResponseArray<GifProps>;
}

interface ThunkProps  {
    params?: GifApiParams;
    urlPath?: string;
}

const initialState: GifState = {
    api_key: process.env.REACT_APP_API_KEY ?? '',
    gifs: {data: []},
    hasErrors: false,
    loadingGifList: false
};

const trendingGifs = createAsyncThunk('gifList/trendingGifs', async (props: ThunkProps) => {
    const { params, urlPath } = props;
    try {
        return (await gifApis.get<ApiResponseArray<GifProps>>(`/${urlPath}`, { params }))?.data?.data;
    } catch (error){
        console.error(error)
    }
});

const gifsSlice = createSlice({
    extraReducers: {
        [trendingGifs.pending.type]: state => {
            state.loadingGifList = true;
        },
        [trendingGifs.fulfilled.type]: (state, {payload}: PayloadAction<GifProps[]>) => {
            state.gifs.data = payload;
            state.loadingGifList = false;
            state.hasErrors = false;
        },
        [trendingGifs.rejected.type]: state => {
            state.loadingGifList = false;
            state.hasErrors = false;
        },
    },
    initialState,
    name: 'gifList',
    reducers: {}
});

const trendingGifReducer = gifsSlice.reducer;

export { trendingGifs, trendingGifReducer };
