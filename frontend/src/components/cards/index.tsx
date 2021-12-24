import { VFC } from 'react';
import {
    CardGroup,
    ImageWrapper,
} from 'components';

interface ImageProps {
    image: string;
    title: string;
}

const ImageCard: VFC<ImageProps> = ({ image, title }) => {
    return (
        <CardGroup>
            <CardGroup.Child1>
                <ImageWrapper src={image} alt={`${title}`} />
            </CardGroup.Child1>
            <CardGroup.Child2>
                {title}
            </CardGroup.Child2>
        </CardGroup>
    )
};

export { ImageCard };
