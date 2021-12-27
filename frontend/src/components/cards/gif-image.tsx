import { VFC } from 'react';
import {
    CardGroup,
    CardGroupChild1,
    CardGroupChild2,
    ImageWrapper,
} from 'components';

interface ImageProps {
    image: string;
    ref?: React.RefObject<HTMLDivElement>;
    title: string;
    onClick?: () => void;
}

const ImageCard: VFC<ImageProps> = (props) => {
    const { image, title, onClick } = props;
    return (
        <CardGroup {...props} onClick={onClick}>
            <CardGroupChild1>
                <ImageWrapper src={image} alt={`${title}`} cursor='pointer' />
            </CardGroupChild1>
            <CardGroupChild2>
                {title}
            </CardGroupChild2>
        </CardGroup>
    )
};

export { ImageCard };
