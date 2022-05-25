import React from "react";
import styled from "styled-components";
import logo from '../Images/cta-logo-one.svg';
const Advertise = () => {
  return (
    <>
      <Section>
        <Container>
        <ImgInfo>
        <img src={logo} alt="disney/logo" />
        </ImgInfo>
          <TextInfo>
          <p>
              Get The Disney Bundle to Stream best movies, shows, and sports
              with Disney+, HULU, and ESPN+ Terms Apply
            </p>
            <button type="button" className="btn-theme-disney">GET THIS DISNEY BUNDLE</button>
          </TextInfo>
        </Container>
      </Section>
    </>
  );
};

const Section = styled.section`
position: relative;
padding: 35px 5%;
background:  transparent;
`;
const Container = styled.div`
display: flex;
padding: 35px 5%;
align-items: center;
justify-content: space-between;
flex-direction: row;
border: 1px solid #f9f9f9;

@media screen and (max-width: 991px) {
    flex-direction: column;
    padding: 25px 35px;
    justify-content: center;
    text-align: center;
}

@media screen and (max-width: 767px) {
    padding: 25px 35px;
    text-align: center;
}
`;
const ImgInfo = styled.div`
width: 48%;
flex: 0 auto;
opacity: 1;
z-index: 1500;

@media screen and (max-width: 991px) {
    width: 100%;
}

img{
    width: 100%;
    max-width: 600px;
    height: auto;
    object-fit: contain;
    object-position: center;
}
`;
const TextInfo = styled.div`
width: 48%;
flex: 0 auto;
opacity: 1;
z-index: 1500;

@media screen and (max-width: 991px) {
    width: 100%;
}
p{
    font-size: 1rem;
    @media screen and (max-width: 550px) {
    font-size: .75rem;
}
}
`;

export default Advertise;
