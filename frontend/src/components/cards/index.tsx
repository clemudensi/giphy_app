import { VFC } from 'react';
import {
    CardGroup,
    CardGroupChild1,
    CardGroupChild2,
    ImageWrapper,
} from 'components';

interface ImageProps {
    image: string;
    title: string;
    ref?: React.RefObject<HTMLDivElement>;
}

const ImageCard: VFC<ImageProps> = (props) => {
    const { image, title } = props;
    return (
        <CardGroup {...props}>
            <CardGroupChild1>
                <ImageWrapper src={image} alt={`${title}`} />
            </CardGroupChild1>
            <CardGroupChild2>
                {title}
            </CardGroupChild2>
        </CardGroup>
    )
};

export { ImageCard };
