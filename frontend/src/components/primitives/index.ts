/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { CSSObject, CSSProp, StyledComponent, StyledComponentBase } from 'styled-components';
import tw from 'twin.macro';

interface GroupProps extends StyledComponentBase<any, Record<string, unknown>> {
	Child1?: CSSObject;
	Child2?: CSSObject
}

const BackGroundWhite = tw.div`
	bg-white
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
		gap-y-10
		gap-x-6
		sm:grid-cols-2
		lg:grid-cols-4
		xl:gap-x-8
	`}
`;

const CardGroup: any = styled.div`
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
	`}
`;

CardGroup.Child1 = styled.div`
	${tw`
		relative
		w-full h-80 bg-white
		rounded-lg overflow-hidden
		group-hover:opacity-75
		sm:aspect-w-2
		sm:aspect-h-1
		sm:h-64
		lg:aspect-w-1
		lg:aspect-h-1
	`}
`;

CardGroup.Child2 = styled.figcaption`
	${tw`
		absolute
		text-lg
		-mt-16
		text-white
		px-4
	`}
`;



CardGroup.Child3 = styled.p`
	${tw`
		text-base
		font-semibold
		text-gray-900
	`}
`;

export {
	BackGroundWhite,
	CardGroup,
	Container,
	GifGrid,
	ImageWrapper
};
