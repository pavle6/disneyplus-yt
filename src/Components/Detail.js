import React, { useState, useEffect } from "react";
import styled from "styled-components";
import playIcon from "../Components/Images/play-icon-black.png";
import trailerIcon from "../Components/Images/play-icon-white.png";
import groupIcon from "../Components/Images/group-icon.png";
import { useParams } from "react-router-dom";
import db from "../firebase.js";
function Detail() {
  const { id } = useParams();
  const [State, setState] = useState();
  useEffect(() => {
    db.collection("Movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setState(doc.data());
        } else {
          console.log("Detail can not be Fetched");
        }
      });
  }, [id]);

  return (
    <>
      {State && (
        <>
          <Background
            style={{
              background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.2),rgba(0,0,0,0.2),rgba(0,0,0,0.4)),url(${State.BackgroundImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Container>
              <Content>
                <ImageTitle>
                  <img src={State.TitleImg} alt="detail/imgtitle" />
                </ImageTitle>
                <h2>{State.Genres}</h2>
                <p>{State.Descrition}</p>
                <ButtonGroup>
                  <PlayBtn>
                    <img src={playIcon} alt="play/icon" />
                    <span>Play</span>
                  </PlayBtn>
                  <TrailerBtn>
                    <img src={trailerIcon} alt="trailer/icon" />
                    <span>Trailer</span>
                  </TrailerBtn>
                  <AddtoPlaylistBtn>
                    <span></span>
                    <span></span>
                  </AddtoPlaylistBtn>
                  <GroupWatchBtn>
                    <img src={groupIcon} alt="group/icon" />
                  </GroupWatchBtn>
                </ButtonGroup>
              </Content>
            </Container>
          </Background>
        </>
      )}
    </>
  );
}
const Background = styled.main`
  min-height: 95vh;

  @media screen and (min-width: 991px) and (max-width: 1200px) {
    min-height: 72vh;
  }
  @media screen and (min-width: 550px) and (max-width: 991px) {
    min-height: 65vh;
  }
  @media screen and (min-width: 280px) and (max-width: 550px) {
    min-height: 55vh;
    object-fit: fill;
  }
`;
const Container = styled.div`
  width: 95%;
  height: auto;
  margin: 0 auto;
`;
const ImageTitle = styled.div`
  width: 100%;
  max-width: 450px;
  margin-top: 19vh;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media screen and (min-width: 550px) and (max-width: 1200px) {
    max-width: 325px;
  }
  @media screen and (min-width: 375px) and (max-width: 550px) {
    max-width: 250px;
  }
  @media screen and (min-width: 280px) and (max-width: 375px) {
    max-width: 150px;
  }
`;
const Content = styled.div`
  display: flex;
  min-height: 95vh;
  overflow: hidden;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  position: relative;

  @media screen and (min-width: 991px) and (max-width: 1200px) {
    min-height: 72vh;
  }
  @media screen and (min-width: 550px) and (max-width: 991px) {
    min-height: 65vh;
  }
  @media screen and (min-width: 280px) and (max-width: 550px) {
    min-height: 55vh;
    object-fit: fill;
  }

  h2 {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500 !important;

    @media screen and (min-width: 550px) and (max-width: 1200px) {
      font-size: 1rem;
    }
    @media screen and (min-width: 375px) and (max-width: 767px) {
      font-size: 0.75rem;
    }
    @media screen and (min-width: 280px) and (max-width: 375px) {
      font-size: 0.7rem;
      max-width: 250px;
    }
  }

  p {
    line-height: 1.4;
    font-size: 20px;
    padding: 1rem 0;
    color: #f9f9f9;
    max-width: 650px;
    width: 100%;

    @media screen and (min-width: 550px) and (max-width: 1200px) {
      padding: 1rem 0;
      max-width: 550px;
    }
    @media screen and (min-width: 375px) and (max-width: 767px) {
      padding: 0.5rem 0;
      font-size: 0.75rem;
      max-width: 400px;
    }
    @media screen and (min-width: 280px) and (max-width: 375px) {
      padding: 0.3rem 0;
      font-size: 0.75rem;
      max-width: 400px;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const PlayBtn = styled.button`
  cursor: default;
  outline: none;
  border: 1px solid rgba(249, 249, 249, 1);
  background: rgba(249, 249, 249, 1);
  margin-right: 22px;
  padding: 0.5rem 1.5rem;
  border-radius: 0.345rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 550px) and (max-width: 1200px) {
    padding: 0.5rem 1.5rem;
  }
  @media screen and (min-width: 375px) and (max-width: 767px) {
    padding: 0.5rem 1.5rem;
  }
  @media screen and (min-width: 280px) and (max-width: 375px) {
    border-radius: 0.145rem;
    padding: 0.4rem 0.7rem;
    margin-right: 13px;
    background: #f9f9ff;
  }

  img {
    width: 32px;
    height: auto;
    opacity: 1;
    z-index: 1500;
    object-fit: contain;

    @media screen and (min-width: 550px) and (max-width: 1200px) {
      width: 25px;
    }
    @media screen and (min-width: 375px) and (max-width: 767px) {
      width: 19px;
    }
  }
  span {
    color: #000;
    font-size: 1.2rem;
    font-weight: 400 !important;
    text-transform: uppercase;
    line-height: 1.08;
    letter-spacing: 1px;

    @media screen and (min-width: 550px) and (max-width: 1200px) {
      font-size: 1rem;
    }
    @media screen and (min-width: 375px) and (max-width: 767px) {
      font-size: 0.8rem;
    }
    @media screen and (min-width: 280px) and (max-width: 375px) {
      font-size: 0.8rem;
    }
  }
`;
const TrailerBtn = styled(PlayBtn)`
  color: rgba(249, 249, 249, 1);
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(249, 249, 249, 1);

  span{
      color: #fff !important;
  }

  &:hover {
    background: rgba(198, 198, 198, 1);
  }
`;
const AddtoPlaylistBtn = styled.button`
  height: 41px;
  width: 41px;
  display: flex;
  cursor: pointer;
  margin-right: 22px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.5);

  @media screen and (min-width: 550px) and (max-width: 1200px) {
    height: 35px;
    width: 35px;
  }
  @media screen and (min-width: 280px) and (max-width: 550px) {
    height: 29px;
    width: 29px;
    margin-right: 13px;
  }

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      width: 16px;
      transform: translate(1px, 0px) rotate(0deg);
      @media screen and (min-width: 280px) and (max-width: 550px) {
        width: 15px;
      }
    }
    &:nth-child(2) {
      width: 2px;
      height: 16px;
      transform: translate(-8px) rotate(0deg);
      @media screen and (min-width: 280px) and (max-width: 550px) {
        height: 13px;
      }
    }
  }
`;
const GroupWatchBtn = styled.button`
  width: 39px;
  width: 39px;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;
  background: rgba(0, 0, 0, 0.5);
  border: 2px solid #fff;

  @media screen and (min-width: 550px) and (max-width: 1200px) {
    height: 36px;
    width: 36px;
  }
  @media screen and (min-width: 280px) and (max-width: 550px) {
    height: 31px;
    width: 31px;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: contain;

    @media screen and (min-width: 550px) and (max-width: 1200px) {
      height: 29px;
      width: 29px;
    }
    @media screen and (min-width: 280px) and (max-width: 550px) {
      height: 23px;
      width: 23px;
    }
  }
`;

export default Detail;
