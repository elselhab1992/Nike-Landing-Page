import { Button } from "../index";
import { Headings } from "../index";
import shoes from "../../assets/images/shoe8.svg";
import {
  Img,
  LeftContainer,
  RigtContainer,
  Section,
} from "./SuperQualityStyles";

const SuperQuality = () => {
  return (
    <Section>
      {/* left */}
      <LeftContainer>
        <div>
          <Headings
            title="Super quality shoes"
            info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, modi
    delectus quibusdam doloremque exercitationem dignissimos, assumenda "
          />
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <Button>View Details</Button>
      </LeftContainer>
      {/* left */}
      <RigtContainer>
        <Img src={shoes} alt="shoes" />
      </RigtContainer>
    </Section>
  );
};

export default SuperQuality;
