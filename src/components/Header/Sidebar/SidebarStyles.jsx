import styled from "styled-components";
import { Link } from "react-scroll";
import { SignIn } from "../Navbar/NavbarStyles";

const SideBar = styled.ul`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
  background-color: ${(props) => props.theme.colors.white};
  padding-top: 5rem;
  top: ${(props) => (props.menu ? "70px" : "-100%")};
  transition: 700ms;

  @media (min-width: 1025px) {
    display: none;
  }
`;

const MobileLink = styled(Link)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.medium};

  &:hover {
    cursor: pointer;
  }
`;

const SignInLink = styled(SignIn)`
  @media (max-width: 1024px) {
    display: flex;
  }
`;

export { SideBar, MobileLink, SignInLink };
