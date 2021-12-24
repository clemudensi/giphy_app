import styled, { StyledComponentBase, keyframes } from 'styled-components';
import tw from 'twin.macro';

interface GroupProps extends StyledComponentBase<any, Record<string, unknown>> {
	Child1?: any;
	Child2?: any;
}

const BackGroundWhite = tw.div`
	bg-white
`;

const Header = styled.h2`
	${tw`
		text-2xl
		font-extrabold
		tracking-tight
		text-gray-900
	`}
`;

const Container = styled.div`
	${tw`
		max-w-2xl
		mx-auto
		py-16 px-4
		sm:py-24
		sm:px-6
		lg:max-w-7xl
		lg:px-8
	`}
`;

const GifGrid = styled.div`
	${tw`
		mt-6 grid
		grid-cols-1
		gap-y-1
		gap-x-1
		sm:grid-cols-3
		lg:grid-cols-6
		xl:gap-x-2
		xl:gap-y-2
	`}
`;

const CardGroup: GroupProps = styled.div`
	${tw`
		relative
	`}
`;

const ImageWrapper = styled.img`
	${tw`
		w-full
		h-full
		object-center
		object-cover
		lg:w-full
		lg:h-full
	`}
`;

CardGroup.Child1 = styled.div`
	${tw`
		relative w-full
		h-36
		bg-gray-200
		aspect-w-1
		aspect-h-1
		overflow-hidden
		group-hover:opacity-75
		sm:aspect-w-2
		sm:aspect-h-1
		sm:h-36
	`}
`;

CardGroup.Child2 = styled.figcaption`
	${tw`
		absolute
		text-lg
		-mt-16
		text-white
		px-4
		font-bold
	`}
`;

const ContainerEnd = styled.div`
	${tw`
		hidden md:flex
		items-center
		justify-end
		lg:w-0
	`}
`;

const ContainerPositioned = styled.div<{position?: string}>`
	${tw`
		hidden md:flex
		items-center
		md:flex-1
		lg:w-0
	`}
	justify-content: ${({position}) => position ? position : 'center'};  /* e.g flex-end, flex-start */
`;

const SvgContainer = styled.div<{
    color?: string;
    height?: number
    width?: number
    }>`
        height: auto;
        width: auto;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: ${props => (props.color ? `${props.color}` : 'inherit')};
        cursor: pointer;
        & svg {
            height: ${props => (props.height ? `calc(${props.height}px + 0.5rem)` : null)};
            width: ${props => (props.width ? `calc(.2vw + ${props.width}px)` : `.5rem`)};
        }
		&:hover {
			color: rgb(139 92 246);
		}
`;

const ContainerFlex = styled.div`
	${tw`
		flex
		flex-row
		px-4
	`}
`;

const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

const Spinner = styled.div`
	${tw`
		border-l-2
		border-r-2
		border-t-0
		border-b-0
		border-indigo-700
		border-solid
		h-12
		w-12
		border-radius[50%]
		m-6
		p-4
		bg-transparent
	`}
	animation: ${rotate360} 1s linear infinite;
	transform: translateZ(0);
`;

export {
	BackGroundWhite,
	CardGroup,
	Container,
	ContainerPositioned,
	ContainerEnd,
	ContainerFlex,
	GifGrid,
	Header,
	ImageWrapper,
	Spinner,
	SvgContainer
};
