import styled from "styled-components";
import { Link } from "react-scroll";

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 18rem;
  padding: 1rem;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: ${(props) => props.theme.colors.white};

  @media (max-width: 1024px) {
    justify-content: space-between;
    gap: 0;
  }
`;

const NavIcons = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 1rem;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSize.medium};
`;

const Logo = styled.img`
  width: 120px;
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  transition: 700ms;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }
`;

const SignIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const SignInAndExplore = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.Regular};
  transition: 700ms;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }
`;

export {
  Header,
  LogoContainer,
  Container,
  Logo,
  NavIcons,
  NavLinks,
  NavLink,
  SignIn,
  SignInAndExplore,
};
