import styled from "styled-components";
import { Heading } from "../Headings/HeadingsStyles";
import { Card } from "../Services/ServicesStyles";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 3rem 10rem;

  @media (min-width: 300px) {
    gap: 1rem;
    padding: 10px;
  }

  @media (min-width: 1200px) {
    gap: 2rem;
    padding: 3rem 10rem;
  }
`;

const TopTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
`;

const CustomerHeading = styled(Heading)`
  color: ${(props) => props.theme.colors.primary};
`;

const CustomerInfo = styled.p`
  width: 60%;

  @media (min-width: 300px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 60%;
  }
`;

const ReviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;

  @media (min-width: 300px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    gap: 10rem;
  }
`;

const ReviewCard = styled(Card)`
  align-items: center;
  text-align: center;
  gap: 1rem;
`;

const ReviewImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export {
  Section,
  TopTitle,
  CustomerHeading,
  CustomerInfo,
  ReviewContainer,
  ReviewCard,
  ReviewImg,
};
