/* eslint-disable react/prop-types */
import { SideBar, MobileLink, SignInLink } from "./SidebarStyles";

const Sidebar = ({ click, closeMenu }) => {
  return (
    <aside>
      <SideBar menu={+click}>
        <li>
          <MobileLink
            to="home"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={closeMenu}
          >
            Home
          </MobileLink>
        </li>
        <li>
          <MobileLink
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={closeMenu}
          >
            About Us
          </MobileLink>
        </li>
        <li>
          <MobileLink
            to="products"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={closeMenu}
          >
            Products
          </MobileLink>
        </li>
        <li>
          <MobileLink
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={closeMenu}
          >
            Contact Us
          </MobileLink>
        </li>
        <li>
          <MobileLink
            to="home"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={closeMenu}
          >
            <SignInLink onClick={closeMenu}>
              <div>Sign In</div>
              <div>/</div>
              <div>Explore Now</div>
            </SignInLink>
          </MobileLink>
        </li>
      </SideBar>
    </aside>
  );
};

export default Sidebar;
