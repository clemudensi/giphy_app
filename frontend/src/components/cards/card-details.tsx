import { VFC } from 'react';
import Slider from 'react-slick';
import {
    ContainerFlex,
    ImageDetails,
    ImageWrapper,
    SectionContainer,
    TextSmall,
    TitleSmall
} from 'components';
import { GifProps, ImagesKey } from 'types';

interface GifDetailProps {
    image: GifProps;
}

const GifDetail: VFC<GifDetailProps> = ({ image }) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 500
    };

    return (
        <>
            <Slider {...settings}>
                {
                    Object.values(ImagesKey).map((key) =>
                        <div key={key}>
                            <ImageWrapper src={image?.images[key]?.url} />
                            <SectionContainer>
                                <ContainerFlex>
                                    <ImageDetails width='25%'>
                                        <TitleSmall>Title</TitleSmall>
                                    </ImageDetails>
                                    <ImageDetails width='70%'>
                                        <TextSmall>{image?.title}</TextSmall>
                                    </ImageDetails>
                                </ContainerFlex>
                                <ContainerFlex>
                                    <ImageDetails width='25%'>
                                        <TitleSmall>Image Type</TitleSmall>
                                    </ImageDetails>
                                    <ImageDetails width='70%'>
                                        <TextSmall>{key}</TextSmall>
                                    </ImageDetails>
                                </ContainerFlex>
                            </SectionContainer>
                        </div>
                    )
                }
            </Slider>
        </>
    )
};

export { GifDetail }
