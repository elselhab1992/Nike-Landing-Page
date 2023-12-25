import { footerLinks, socialMedia } from "../../constants";
import logo from "../../assets/images/footer-logo.svg";
import {
  FooterContainer,
  FooterLogo,
  LinksContainer,
  SocialContainer,
  SocialImgs,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainer id="contact">
      <FooterLogo>
        <img src={logo} alt="nike logo" width={150} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed est,
          aperiam qui aspernatur ratione blanditiis.
        </p>
        <SocialContainer>
          {socialMedia.map((icon, index) => {
            const { src, alt } = icon;

            return (
              <SocialImgs key={index}>
                <img
                  src={src}
                  alt={alt}
                  width={30}
                  height={30}
                  style={{ cursor: "pointer" }}
                />
              </SocialImgs>
            );
          })}
        </SocialContainer>
      </FooterLogo>
      <LinksContainer>
        {footerLinks.map((section, index) => {
          const { title } = section;

          return (
            <div key={index}>
              <h3 key={index}>{title}</h3>
              <ul>
                {section.links.map((listItem, index) => {
                  const { name, link } = listItem;

                  return (
                    <li key={index}>
                      <a href={link}>{name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </LinksContainer>
    </FooterContainer>
  );
};

export default Footer;
