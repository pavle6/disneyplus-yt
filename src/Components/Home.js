/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import styled from "styled-components";
import Banner from "./Home/Banner";
import Brand from "./Home/Brand";
import Original from "./Home/Original";
import background from "../Components/Images/home-background.png";
import Hollywood from "./Home/Hollywood";
import NewtoDisney from "./Home/NewtoDisney";
import Trending from "./Home/Trending";
import DisneyKid from "./Home/DisneyKid";
import Popular from "./Home/Popular";
import db from "../firebase.js";
import { useDispatch } from "react-redux";
import { setDisneyMovies } from "./Redux/Reducers/MovieReducer";

export const Home = () => {

const dispatch = useDispatch();

  let populars = [];
  let hollywoods = [];
  let newTos = [];
  let kidsTvs = [];
  let originals = [];
  let trendings = [];

  useEffect(() => {
    db.collection("Movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        //   console.log(doc.data().type)
        switch (doc.data().type) {
          case "popular":
            populars = [...populars, { id: doc.id, ...doc.data() }];
            break;

          case "hollywood":
            hollywoods = [...hollywoods, { id: doc.id, ...doc.data() }];
            break;

          case "newTo":
            newTos = [...newTos, { id: doc.id, ...doc.data() }];
            break;

          case "kidsTv":
            kidsTvs = [...kidsTvs, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trendings = [...trendings, { id: doc.id, ...doc.data() }];
            break;

          default:
            break;
        }
      });
      dispatch(setDisneyMovies({
        popular:populars,
        hollywood:hollywoods,
        newTo:newTos,
        kidsTv:kidsTvs,
        original:originals,
        trending:trendings
      }))
    });
  }, []);

  return (
    <>
      <Container>
        <Banner />
        <Brand />
        <Original />
        <NewtoDisney />
        <Trending />
        <Hollywood />
        <DisneyKid />
        <Popular />
      </Container>
    </>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);
  display: block;
  overflow-x: hidden;
  background: url(${background});
`;

export default Home;
