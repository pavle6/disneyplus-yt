import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../Components/Images/logo.svg";
import homeIcon from "../Components/Images/home-icon.svg";
import searchIcon from "../Components/Images/search-icon.svg";
import watchIcon from "../Components/Images/watchlist-icon.svg";
import origIcon from "../Components/Images/original-icon.svg";
import movieIcon from "../Components/Images/movie-icon.svg";
import seriesIcon from "../Components/Images/series-icon.svg";
import { NavLink, useHistory } from "react-router-dom";
import shotdown from "../Components/Images/globe.png";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUserName,
  selectUserPhoto,
  setLoginState,
  setLogOutState,
} from "./Redux/Reducers/UserReducer";
import { auth, provider } from "../firebase";
const NavBar = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const history = useHistory();
  const userPhoto = useSelector(selectUserPhoto);
  const [Toggler, setToggler] = useState(false);
  const ifPopupOpen = () => setToggler(!Toggler);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) =>{
        if(user){
            dispatch(setLoginState({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))
            history.push("/home");
        }
    })
  }, [dispatch, history])

  const SignIn = () => {
    auth.signInWithPopup(provider).then((response) => {
      let user = response.user;
      dispatch(
        setLoginState({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        })
      );
      history.push("/home");
    });
  };

  const SignOut = () =>{
auth.signOut().then(() =>{
    dispatch(setLogOutState());
    history.push("/");
})
  }

  return (
    <>
      <Nav>
        <NavBrand>
          <NavLink to="/home">
            <img src={logo} alt="disney/logo" />
          </NavLink>
        </NavBrand>

        {!userName ? (
          <LoginButton onClick={SignIn}>Login In</LoginButton>
        ) : (
          <>
            <MenuLinks>
              <li>
                <NavLink className="nav-link" to="/home">
                  <img
                    style={{ width: "0.99rem", height: "0.99rem" }}
                    src={homeIcon}
                    alt=""
                  />
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="nav-link">
                  <img src={searchIcon} alt="" />
                  <span>Search</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="nav-link">
                  <img src={watchIcon} alt="" />
                  <span>Watchlist</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="nav-link">
                  <img src={origIcon} alt="" />
                  <span>Originals</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="nav-link">
                  <img src={movieIcon} alt="" />
                  <span>Movies</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="nav-link">
                  <img src={seriesIcon} alt="" />
                  <span>Series</span>
                </NavLink>
              </li>
            </MenuLinks>
            <UserAuth>
              <img src={userPhoto} alt="admin/disney" onClick={ifPopupOpen} />
            </UserAuth>
            <PopupMenu activeState={Toggler}>
              <li>
                <NavLink className="nav-link" to="/home">
                  <img
                    style={{ width: "0.99rem", height: "0.99rem" }}
                    src={homeIcon}
                    alt=""
                  />
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="#" onClick={SignOut} className="nav-link">
                  <img
                    style={{ width: "0.99rem", height: "0.99rem" }}
                    src={shotdown}
                    alt=""
                  />
                  <span>Sign Out</span>
                </NavLink>
              </li>
            </PopupMenu>
          </>
        )}
      </Nav>
    </>
  );
};

const LoginButton = styled.button`
  font-size: 1.2rem;
  color: #fff;
  cursor: pointer;
  padding: 5px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border: 1px solid #f9f9f9;
  transition: all 0.2s ease 0s;
  background-color: rgba(0, 0, 0, 0.6);
  @media screen and (min-width: 280px) and (max-width: 550px) {
    font-size: 0%.8rem;
    padding: 4px 13px;
  }
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const Nav = styled.nav`
  display: flex;
  min-height: 7vh;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 3rem;
  opacity: 1;
  z-index: 2500;
`;
const NavBrand = styled.div`
  width: 101px;
  height: auto;
  object-position: center;

  img {
    width: 100%;
    height: auto;
    object-fit: fill;
  }
`;
const MenuLinks = styled.div`
  @media screen and (min-width: 280px) and (max-width: 991px) {
    display: none;
  }

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  flex-direction: row;
  flex-wrap: row wrap;
  margin-right: auto;
  margin-left: 3rem;

  li {
    list-style: none;

    > .nav-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      position: relative;

      img {
        width: 1.3rem;
        height: 1.3rem;
        object-fit: contain;
      }

      span {
        color: #fff;
        font-size: 1rem;
        font-weight: 300;
        letter-spacing: 1px;
        line-height: 1.08;
        padding: 0.5rem;
        margin-top: 5px;
        text-transform: uppercase;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          top: 100%;
          right: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background: #f9f9f9;
          transition: all 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        }
      }
    }
    &:hover {
      span::before {
        width: 100%;
      }
    }
  }
`;
const UserAuth = styled.div`
  width: 40px;
  height: 50px;
  object-position: center;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 100px;
  }
`;

const PopupMenu = styled.div`
  position: absolute;
  z-index: 3000;
  top: 7vh;
  right: 3.5rem;
  padding: 0.5rem;
  background-color: #040714;
  border-radius: 0.345rem;
  border: 1.3px solid rgba(151, 151, 151, 1);
  box-shadow: rgb(0 0 0/50%) 0px 0px 18px 0px;
  display: ${(event) => (event.activeState ? "flex" : "none")};
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  li {
    list-style: none;
    display: flex;
    align-items: flex-start;
    border-bottom: 1.3px solid rgba(151, 151, 151, 1);
    width: 100%;

    > .nav-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      position: relative;

      img {
        width: 1.3rem;
        height: 1.3rem;
        object-fit: contain;
      }

      span {
        color: #fff;
        font-size: 1rem;
        font-weight: 300;
        letter-spacing: 1px;
        line-height: 1.08;
        padding: 0.5rem;
        margin-top: 5px;
        text-transform: uppercase;
        position: relative;
      }
    }
  }
`;

export default NavBar;
