interface ApiResponseArray<T> {
    readonly data: T[];
}

interface ApiResponseObject<T> {
    readonly data: T;
}

export type { ApiResponseArray, ApiResponseObject };