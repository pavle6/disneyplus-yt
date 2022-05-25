import React from "react";
import styled from "styled-components";
import logo from "../Components/Images/logo.svg";
function Footer() {
  return (
    <>
      <Section>
        <Container>
          <FooterBrand>
            <img src={logo} alt="disney/logo" />
          </FooterBrand>
          <Nav>
            <li>
              <p>English</p>
            </li>
            <li>
              <p>Subscriber Agreement</p>
            </li>
            <li>
              <p>Privacy Policy</p>
            </li>
            <li>
              <p>Your California Privacy</p>
            </li>
            <li>
              <p>Do Not Sell My Infos</p>
            </li>
            <li>
              <p>Children's Online Privacy Policy</p>
            </li>
            <li>
              <p>Closed Captioning</p>
            </li>
            <li>
              <p>Interest-Based-Ads</p>
            </li>
            <li>
              <p>Supported Devices</p>
            </li>
            <li>
              <p>Help</p>
            </li>
            <li>
              <p>Gift Disney</p>
            </li>
            <li>
              <p>About Us</p>
            </li>
            <li>
              <p>Disney+ Partner Program</p>
            </li>
            <li>
              <p>Premier Access</p>
            </li>
            <li>
              <p>The Disney Bundles</p>
            </li>
          </Nav>
          <Copyright>
            <p>© DisneyPlus-PavleM. All Rights Reserved 2021</p>
          </Copyright>
        </Container>
      </Section>
    </>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  margin-bottom: 0;

  @media screen and (max-width: 550px) {
    padding: 1re 0;
  }
`;
const Container = styled.div`
  width: 95%;
  margin: 0 auto;
`;
const FooterBrand = styled.div`
  text-align: center;
  img {
    width: 10rem;
    height: auto;
    object-fit: fill;

    @media screen and (max-width: 550px) {
      width: 7rem;
    }
  }
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  flex-shrink: 0;
  flex-grow: initial;

  li {
    list-style: none;

    p {
      padding: 0.5rem;
      font-size: 0.9rem;
      margin-right: 0.3rem;

      @media screen and (max-width: 550px) {
        padding: 0.1rem;
        font-size: 0.75rem;
        margin-right: 0.3rem;
      }
    }
  }
`;
const Copyright = styled.div`
text-align: center;
p{
    font-weight: 400 !important;
    margin-top: 1vh;
    @media screen and (max-width: 550px) {
        font-size: 0.95rem;

      }
}
`;

export default Footer;
