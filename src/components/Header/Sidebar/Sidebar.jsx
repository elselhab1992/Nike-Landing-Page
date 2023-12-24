/* eslint-disable react/prop-types */
import { SideBar, MobileLink, Button } from "./SidebarStyles";
import { IoMdCart } from "react-icons/io";

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
            to="specials"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={closeMenu}
          >
            Specials
          </MobileLink>
        </li>
        <li>
          <MobileLink
            to="menu"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={closeMenu}
          >
            Menu
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
            Contact
          </MobileLink>
        </li>
        <li>
          <MobileLink
            to="menu"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={closeMenu}
          >
            <Button>
              Order
              <span>
                <IoMdCart size={20} />
              </span>
            </Button>
          </MobileLink>
        </li>
      </SideBar>
    </aside>
  );
};

export default Sidebar;
