import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { gifApis } from 'api';
import { ApiResponseObject, GifApiParams, GifProps } from 'types';

interface GifState extends GifApiParams {
    hasErrors: boolean;
    loadingGif: boolean;
    gif: ApiResponseObject<GifProps>;
}

interface ThunkProps  {
    params?: GifApiParams;
    urlPath?: string;
}

const initialState: GifState = {
    api_key: process.env.REACT_APP_API_KEY ?? '',
    gif: {data: {} as GifProps},
    hasErrors: false,
    loadingGif: false
};

const gifImage = createAsyncThunk('gif/gifImage', async (props: ThunkProps) => {
    const { params, urlPath } = props;
    try {
        return (await gifApis.get<ApiResponseObject<GifProps>>(`/${urlPath}`, { params }))?.data?.data;
    } catch (error){
        console.error(error)
    }
});

const gifsSlice = createSlice({
    extraReducers: {
        [gifImage.pending.type]: state => {
            state.loadingGif = true;
        },
        [gifImage.fulfilled.type]: (state, {payload}: PayloadAction<GifProps>) => {
            state.gif.data = payload;
            state.loadingGif = false;
            state.hasErrors = false;
        },
        [gifImage.rejected.type]: state => {
            state.loadingGif = false;
            state.hasErrors = false;
        },
    },
    initialState,
    name: 'gif',
    reducers: {}
});

const gifImageReducer = gifsSlice.reducer;

export { gifImage, gifImageReducer };