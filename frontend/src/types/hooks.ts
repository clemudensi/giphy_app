interface GifApiParams {
    api_key: string;
    limit?: number | string;
    offset?: number | string;
    q?: unknown;
    rating?: string;
    random_id?: string;
    bundle?: string;
    tag?: string;
}

export type { GifApiParams };