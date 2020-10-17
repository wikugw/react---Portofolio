import React from 'react';
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
} from './Footer.elements';
import { Button } from '../../globalStyles'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>
          You can unsubscribe at any  time
        </FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email..." />
          <Button fontBig>
            Subscribe
            </Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItem>
            <FooterLinksTitle> About Us</FooterLinksTitle>
            <FooterLink to='/'>How It Works</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Cereers</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
            <FooterLink to='/'>Terms of Services</FooterLink>
          </FooterLinksItem>
          <FooterLinksItem>
            <FooterLinksTitle> Contact Us</FooterLinksTitle>
            <FooterLink to='/'>How It Works</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Cereers</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
            <FooterLink to='/'>Terms of Services</FooterLink>
          </FooterLinksItem>
          <FooterLinksItem>
            <FooterLinksTitle> Videos</FooterLinksTitle>
            <FooterLink to='/'>How It Works</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Cereers</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
            <FooterLink to='/'>Terms of Services</FooterLink>
          </FooterLinksItem>
          <FooterLinksItem>
            <FooterLinksTitle> Social Media</FooterLinksTitle>
            <FooterLink to='/'>How It Works</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Cereers</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
            <FooterLink to='/'>Terms of Services</FooterLink>
          </FooterLinksItem>
        </FooterLinksWrapper>
      </FooterLinksContainer>
    </FooterContainer>
  )
}

export default Footer
