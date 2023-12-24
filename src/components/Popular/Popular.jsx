import { Headings } from "../index";
import { products } from "../../constants";
import {
  Card,
  Cards,
  Section,
  Span,
  Star,
  StarContainer,
  TopTitle,
} from "./PopularStyles";

const Popular = () => {
  return (
    <Section>
      <TopTitle>
        <Headings
          title="our popular products"
          info="experience top-notch quality and style with our sought-after selections. discover a world of comfort, design and value. "
        />
      </TopTitle>
      <Cards>
        {products.map((product, index) => {
          const { imgURL, name, price } = product;

          return (
            <Card key={index}>
              <img src={imgURL} alt={name} />
              <StarContainer>
                <Star /> (4.5)
              </StarContainer>
              <h3>{name}</h3>
              <Span>{price}</Span>
            </Card>
          );
        })}
      </Cards>
    </Section>
  );
};

export default Popular;
