import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  padding: 5rem;
  background-color: #020211;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 5rem;

  @media (min-width: 300px) {
    gap: 1rem;
    flex-direction: column;
    padding: 20px 10px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    padding: 5rem;
    gap: 5rem;
  }
`;

const FooterLogo = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;

  @media (min-width: 300px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 35%;
  }

  @media (min-width: 1200px) {
    width: 20%;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

const SocialImgs = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  width: 50px;
  height: 50px;
  border-radius: 25px;
  padding: 10px;
  text-align: center;
`;

const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;

  @media (min-width: 300px) {
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: 1200px) {
    gap: 5rem;
  }
`;

export {
  FooterContainer,
  FooterLogo,
  SocialContainer,
  SocialImgs,
  LinksContainer,
};
