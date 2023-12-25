import { Headings, Button } from "../index";
import offer from "../../assets/images/offer.svg";
import {
  Section,
  Img,
  ImgContainer,
  InfoContainer,
  SpecialIcon,
} from "./SpecialOfferStyles";

const SpecialOffer = () => {
  return (
    <Section id="offers">
      {/* left */}
      <ImgContainer>
        <Img src={offer} alt="offers" />
      </ImgContainer>
      {/* right */}
      <InfoContainer>
        <Headings
          title="special offer"
          info="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    minima? Sit ex laudantium laboriosam soluta. Sed nisi quas voluptates! "
        />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <Button>
          Shop Now <SpecialIcon />
        </Button>
      </InfoContainer>
    </Section>
  );
};

export default SpecialOffer;
