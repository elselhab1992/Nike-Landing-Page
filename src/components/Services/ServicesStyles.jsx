import styled from "styled-components";

const Section = styled.section`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 2rem auto;

  @media (min-width: 300px) {
    width: 100%;
    grid-template-columns: 1fr;
    padding: 20px 10px;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    width: 80%;
  }
`;

const Card = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 1.5rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 5px 5px 5px #ccc;

  @media (min-width: 300px) {
    width: 100%;
  }

  @media (min-width: 1200px) {
    width: 400px;
  }
`;

const ImgContainer = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  width: 40px;
  height: 40px;
  border-radius: 25px;
`;

export { Section, Card, ImgContainer };
