import { services } from "../../constants";
import { Card, ImgContainer, Section } from "./ServicesStyles";

const Services = () => {
  return (
    <Section>
      {services.map((service, index) => {
        const { imgURL, label, subtext } = service;

        return (
          <Card key={index}>
            <ImgContainer>
              <img src={imgURL} alt={label} width={25} height={25} />
            </ImgContainer>
            <h3>{label}</h3>
            <p>{subtext}</p>
          </Card>
        );
      })}
    </Section>
  );
};

export default Services;
