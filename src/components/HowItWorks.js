import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading as HeadingTitle } from "./misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../images/svg-decorator-blob-3.svg";

import HowItWorksImageSrc from "images/how-it-works.jpg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-lg`;

const ImageContainer = styled.div`
  ${tw`mt-10 md:mx-3 lg:mx-6 w-full rounded flex items-center max-w-full`}
`;
const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default () => {
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>How it works</HeadingTitle>
          <HeadingDescription>
            Firstly, players deposit their assets, like game props and ETH into
            the game. Once done with the game, players can exit by withdrawing
            their assets back to Ethereum.
          </HeadingDescription>
        </HeadingInfoContainer>
        <ImageContainer>
          <Image src={HowItWorksImageSrc} />
        </ImageContainer>
      </Content>
      <DecoratorBlob1 />
    </Container>
  );
};
