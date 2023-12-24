/* eslint-disable no-unused-vars */
import { Button } from "../index";
import { shoes, statistics } from "../../constants";
import {
  Section,
  LeftContainer,
  TopText,
  Heading,
  Span,
  MainText,
  Icon,
  RightContainer,
  Thumbnail,
  ThumbnailContainer,
  MainImages,
  Img,
  Statistics,
  StatisticsHeading,
} from "./HeroStyles";
import { useState } from "react";

const Hero = () => {
  const [mainImage, setMainImage] = useState(shoes[0]);

  return (
    <Section id="home">
      {/* left */}
      <LeftContainer>
        <TopText>our summer collections</TopText>
        <Heading>
          The new arrival
          <br /> <Span>nike</Span> shoes
        </Heading>
        <MainText>
          discover stylish nike arrivals, quality, comfort, and innovation for
          your active life.
        </MainText>
        <Button>
          Shop Now <Icon />
        </Button>
        <Statistics>
          {statistics.map((item, index) => {
            const { value, label } = item;

            return (
              <div key={index}>
                <StatisticsHeading>{value}</StatisticsHeading>
                <p>{label}</p>
              </div>
            );
          })}
        </Statistics>
      </LeftContainer>
      {/* right */}
      <RightContainer>
        {/* main img */}
        <MainImages>
          <Img src={mainImage.bigShoe} alt="shoes" />
        </MainImages>
        {/* side imgs */}
        <ThumbnailContainer>
          {shoes.map((imgs) => {
            const { thumbnail, bigShoe, id } = imgs;

            return (
              <Thumbnail
                key={id}
                src={thumbnail}
                alt="shoes"
                width={100}
                onClick={() => {
                  setMainImage(
                    id === 1 ? shoes[0] : id === 2 ? shoes[1] : shoes[2]
                  );
                }}
              />
            );
          })}
        </ThumbnailContainer>
      </RightContainer>
    </Section>
  );
};

export default Hero;
