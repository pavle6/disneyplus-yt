import React from "react";
import styled from "styled-components";
import Devices from "../Images/Devices.png";
const DownloadNow = () => {
  return (
    <>
      <Section>
        <Container>
          <TextInfo>
            <h1 className="disney-titles">Stream Now or Download Now</h1>
            <h1 className="disney-titles">Explore US More on Disney</h1>
            <p>
              Stream on 4 Devices at Once or Download Your Favourites to Watch
              Later. With dozers of titles it's stuning 4K UHD, you can watch
              the way you always wished
            </p>
            <button type="button" className="btn-theme-disney">
              Download Now
            </button>
          </TextInfo>
          <ImgInfo>
            <img src={Devices} alt="img/devices" />
          </ImgInfo>
        </Container>
      </Section>
    </>
  );
};

const Section = styled.section`
  padding: 50px 5%;
  position: relative;
  background: transparent;

  @media screen and (max-width: 991px) {
    padding: 35px 50px;
  }
  @media screen and (max-width: 767px) {
    padding: 25px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

const TextInfo = styled.div`
  width: 48%;
  flex: 0 auto;
  opacity: 1;
  z-index: 1500;
  position: relative;

  .disney-titles {
    font-size: 2.3rem;
    font-weight: 500 !important;
    line-height: 2.5rem;

    @media screen and (min-width: 991px) and (max-width: 1200px) {
      font-size: 1.8rem;
      line-height: 2rem;
    }
    @media screen and (min-width: 550px) and (max-width: 991px) {
      font-size: 1.5rem;
      line-height: 1.8rem;
    }
    @media screen and (min-width: 375px) and (max-width: 550px) {
      font-size: 1.3rem;
      line-height: 1.7rem;
    }
    @media screen and (min-width: 280px) and (max-width: 375px) {
      font-size: 1.1rem;
      line-height: 1.3rem;
    }
  }

  .btn-theme-disney {
    color: #fff;
    padding: 0.5rem 3rem;
    font-size: 17px;
    border-radius: 4px;
    text-align: center;
    margin-top: 2vh;
    display: inline-block;
    text-transform: uppercase;
    background-color: #0063e5;
    border: 1px solid transparent;
    cursor: pointer;

    @media screen and (min-width: 550px) and (max-width: 767px) {
      padding: 0.5rem 2rem;
      font-size: 15px;
    }
    @media screen and (min-width: 375px) and (max-width: 550px) {
      padding: 0.5rem 1.7rem;
      font-size: 15px;
    }
    @media screen and (min-width: 280px) and (max-width: 550px) {
      padding: 0.5rem 1.5rem;
      font-size: 10px;
    }

    &:hover {
      background: #0099ff;
    }
  }

  @media screen and (max-width: 991px) {
    padding: 0;
    width: 100%;
  }

  p {
    font-size: 1rem;
    font-weight: 100;

    @media screen and (min-width: 375px) and (max-width: 550px) {
      font-size: 0.85rem;
      line-height: 1rem;
    }
    @media screen and (min-width: 375px) and (max-width: 550px) {
      font-size: 0.7rem;
      line-height: 1rem;
      margin-top: 1vh;
    }
  }
`;

const ImgInfo = styled.div`
  width: 48%;
  flex: 0 auto;
  opacity: 1;
  z-index: 1500;
  position: relative;

  @media screen and (max-width: 991px) {
    padding: 0;
    width: 100%;
  }

  img {
    width: 100%;
    max-width: 600px;
    height: auto;

    @media screen and (min-width: 500px) and (max-width: 1200px) {
      height: auto;
      width: 100%;
      object-fit: contain;
      margin-top: 3vh;
    }
    @media screen and (min-width: 280px) and (max-width: 500px) {
      height: 25vh;
      width: 100%;
      object-fit: contain;
      margin-top: 3vh;
    }
  }
`;

export default DownloadNow;
