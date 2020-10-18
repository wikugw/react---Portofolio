import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItem,
  FooterLinksTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialIcon,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';
import { Button } from '../../globalStyles'

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo>
            <SocialIcon to="/" />
          </SocialLogo>
          <WebsiteRights>WIKUGW © 2020</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="https://github.com/wikugw" target="_blank" aria-label="Github">
              <FaGithub />
            </SocialIconLink>
            <SocialIconLink href="https://www.instagram.com/wikugw/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="https://twitter.com/wikugw" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="https://www.linkedin.com/in/wikugw/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
