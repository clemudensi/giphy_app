type AnalyticsProps = {
    onload: {
        url: string;
    };
    onclick: {
        url: string;
    };
    onsent: {
        url: string;
    };
}

type ImagesProps = {
    height: string;
    width: string;
    size: string;
    url: string;
    mp4_size?: string;
    mp4?: string;
    webp_size?: string;
    webp?: string;
    frames?: string;
    hash?: string;
}

interface GifProps {
    type: string;
    id: string;
    url: string;
    slug: string;
    bitly_gif_url: string;
    bitly_url: string;
    embed_url: string;
    username: string;
    source: string;
    title: string;
    rating: string;
    content_url: string;
    source_tld: string;
    source_post_url: string;
    is_sticker: number;
    import_datetime: string;
    trending_datetime: string;
    images: {
        original: ImagesProps;
        fixed_height: ImagesProps;
        fixed_height_downsampled?: ImagesProps;
        fixed_height_small?: ImagesProps;
        fixed_width: ImagesProps;
        fixed_width_downsampled?: ImagesProps;
        fixed_width_small?: ImagesProps;
    };
    analytics_response_payload: string;
    analytics: AnalyticsProps;
}

export type { GifProps };