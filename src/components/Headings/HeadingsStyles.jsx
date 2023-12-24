import styled from "styled-components";

const Container = styled.div`
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

const Heading = styled.h2`
  font-size: ${(props) => props.theme.fontSize.large};
  color: ${(props) => props.theme.colors.secondary};

  @media (min-width: 300px) {
    line-height: 1.2;
  }
`;

const Info = styled.p`
  width: 55%;

  @media (min-width: 300px) {
    width: 100%;
  }

  @media (min-width: 1024px) {
    width: 55%;
  }
`;

export { Container, Heading, Info };
