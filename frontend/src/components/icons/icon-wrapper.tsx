import { FC } from 'react';
import { SvgContainer } from 'components';
import { IconWrapperProps } from 'types';

const IconWrapper: FC<IconWrapperProps> = props => {
    const { Icon, onClick } = props
    return (
        <SvgContainer {...props}>
            <Icon onClick={onClick} />
        </SvgContainer>
    )
};

export { IconWrapper };