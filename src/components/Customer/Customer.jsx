import { reviews } from "../../constants";
import { Star, StarContainer } from "../Popular/PopularStyles";
import {
  CustomerHeading,
  CustomerInfo,
  ReviewCard,
  ReviewContainer,
  ReviewImg,
  Section,
  TopTitle,
} from "./CustomerStyles";

const Customer = () => {
  return (
    <Section>
      {/* top */}
      <TopTitle>
        <CustomerHeading>
          what our <span>customers</span> say ?
        </CustomerHeading>
        <CustomerInfo>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
          accusamus ipsum magnam laudantium est.
        </CustomerInfo>
      </TopTitle>
      {/* bottom */}
      <ReviewContainer>
        {reviews.map((review, index) => {
          const { imgURL, customerName, rating, feedback } = review;

          return (
            <ReviewCard key={index}>
              <ReviewImg src={imgURL} alt={customerName} />
              <p>{feedback}</p>
              <StarContainer>
                <Star /> ({rating})
              </StarContainer>
              <h3>{customerName}</h3>
            </ReviewCard>
          );
        })}
      </ReviewContainer>
    </Section>
  );
};

export default Customer;
