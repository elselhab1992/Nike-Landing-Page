/* eslint-disable react/prop-types */
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../assets/images/header-logo.svg";
import {
  Header,
  LogoContainer,
  Logo,
  Container,
  NavIcons,
  NavLinks,
  NavLink,
  SignIn,
  SignInAndExplore,
} from "./NavbarStyles";

function Navbar({ click, handleClick }) {
  return (
    <Header>
      <LogoContainer>
        <Logo src={logo} alt="logo" />
      </LogoContainer>

      <Container>
        <nav>
          <NavLinks>
            <li>
              <NavLink
                to="home"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="products"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact Us
              </NavLink>
            </li>
          </NavLinks>
        </nav>
      </Container>
      <SignIn>
        <SignInAndExplore>Sign In</SignInAndExplore>
        <div>/</div>
        <SignInAndExplore>Explore Now</SignInAndExplore>
      </SignIn>
      <NavIcons onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "#000", cursor: "pointer" }} />
        ) : (
          <FaBars size={30} style={{ color: "#000", cursor: "pointer" }} />
        )}
      </NavIcons>
    </Header>
  );
}

export default Navbar;
