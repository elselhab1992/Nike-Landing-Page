import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 300px) {
    flex-direction: column-reverse;
    padding: 20px 10px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const LeftContainer = styled.div`
  width: 52%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;

  @media (min-width: 300px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }

  @media (min-width: 1024px) {
    align-items: flex-start;
    text-align: left;
  }

  @media (min-width: 1200px) {
    width: 52%;
  }
`;

const RigtContainer = styled.div`
  width: 30%;

  @media (min-width: 300px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 1200px) {
    width: 30%;
  }
`;

const Img = styled.img`
  width: 100%;
`;

export { Section, LeftContainer, RigtContainer, Img };
