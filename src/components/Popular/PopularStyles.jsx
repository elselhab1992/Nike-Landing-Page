import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const Section = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  padding: 5rem;
  margin: auto;

  @media (min-width: 300px) {
    width: 100%;
    padding: 10px;
  }

  @media (min-width: 1200px) {
    width: 90%;
    padding: 5rem;
  }
`;

const TopTitle = styled.div`
  align-self: flex-start;
`;

const Cards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5rem;

  @media (min-width: 300px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 5rem;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;

  @media (min-width: 300px) {
    align-items: center;
  }

  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`;

const Span = styled.span`
  font-weight: ${(props) => props.theme.fontWeight.medium};
  font-size: ${(props) => props.theme.fontSize.medium};
`;

const Star = styled(FaStar)`
  font-size: ${(props) => props.theme.fontSize.medium};
  color: ${(props) => props.theme.colors.secondary};
`;

const StarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export { Section, TopTitle, Cards, Card, Span, Star, StarContainer };
