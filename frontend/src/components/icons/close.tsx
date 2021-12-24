import { VFC } from 'react';
import { IconWrapper } from './icon-wrapper';
import { SVGProps } from 'types';
import { ReactComponent as Icon }  from 'assets/svg/x-circle.svg';

const CancelIcon: VFC<SVGProps> = (props) => {
    const { color, height = 16, width = 16, onClick } = props;

    return (
        <IconWrapper
            Icon={Icon}
            color={color}
            height={height}
            width={width}
            onClick={onClick}
            {...props}
        />
    )
};

export { CancelIcon };
