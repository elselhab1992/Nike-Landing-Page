/* eslint-disable react/prop-types */
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../assets/food-logo.png";
import {
  Header,
  LogoContainer,
  Logo,
  Container,
  NavIcons,
  NavLinks,
  NavLink,
  Button,
} from "./NavbarStyles";
import { IoMdCart } from "react-icons/io";

function Navbar({ click, handleClick }) {
  return (
    <Header>
      <LogoContainer>
        <Logo src={logo} alt="logo" />
        <span>Foodie</span>
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
                to="specials"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Specials
              </NavLink>
            </li>
            <li>
              <NavLink
                to="menu"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Menu
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
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="menu"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <Button>
                  Order
                  <span>
                    <IoMdCart size={20} />
                  </span>
                </Button>
              </NavLink>
            </li>
          </NavLinks>
        </nav>
      </Container>
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
