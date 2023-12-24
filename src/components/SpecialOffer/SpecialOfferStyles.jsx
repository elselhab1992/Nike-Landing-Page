import styled from "styled-components";
import { Icon } from "../Hero/HeroStyles";

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 13rem;

  @media (min-width: 300px) {
    flex-direction: column;
    padding: 10px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    padding: 1rem 13rem;
    gap: 8rem;
  }
`;

const ImgContainer = styled.div`
  width: 80%;

  @media (min-width: 300px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 1200px) {
    width: 80%;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;

  @media (min-width: 300px) {
    align-items: center;
    text-align: center;
  }

  @media (min-width: 1024px) {
    align-items: flex-start;
    text-align: left;
  }
`;

const SpecialIcon = styled(Icon)``;

export { Section, ImgContainer, Img, InfoContainer, SpecialIcon };
