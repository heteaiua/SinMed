import React, { useState, useContext, useCallback } from "react";

import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";

import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import Button from "../Button";
import "./Sidebar.css";
import LogoImg from "../../assets/logo_file.png";
import AuthContext from "../../Context/auth-context";

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Logo = styled.img`
  margin: 30px;
  max-width: 62px;
  height: auto;
  display: flex;
`;

const Sidebar = () => {
  const auth = useContext(AuthContext);

  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  // const [patientId, setPatientId] = useState();

  // const login = useCallback((pid) => {
  //   setPatientId(pid);
  //   setIsLoggedIn(true);
  // }, []);

  // const logout = useCallback(() => {
  //   setIsLoggedIn(false);
  //   setPatientId(null);
  // }, []);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const refreshFunction = (e) => {
    e.preventDefault();
    setSidebar(false);
  }

  // console.log(auth.isLoggedIn + "a");

  return (

    // <AuthContext.Provider
    //   value={{
    //     isLoggedIn: isLoggedIn,
    //     patientId: patientId,
    //     login: login,
    //     logout: logout,
    //   }}
    // >
      <>
        {/* {!auth.isLoggedIn && (
        <li>
        <NavLink to="/login">Login!!!</NavLink>
        </li>
      )} */}

        <IconContext.Provider value={{ color: "#fff" }}>
      
          {/* here comes the main header  Navbar*/}
          <Nav>

            <NavIcon to="#">
              <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon>
            {!auth.isLoggedIn && (
              <div className="login-button">
                <Button to="/login">Login</Button>
              </div>
            )}
            {!auth.isLoggedIn && (
              <div className="register-button">
                <Button to="/register">Register</Button>
              </div>
            )}
            {auth.isLoggedIn && (
              <div className="logout-button">
                <Button onClick={auth.logout}>LOGOUT</Button>
              </div>
            )}
            <h1
              className="main-header"
              style={{
                textAlign: "left",
                marginLeft: "200px",
                color: "lightblue",
              }}
            >
              
              <Link to={"/Home"}>
                <Logo src={LogoImg} onClick={refreshFunction}></Logo>
              </Link>
              
            </h1>
          </Nav>

          {/* here comes the proper sidebar */}
          <SidebarNav sidebar={sidebar} onClick={refreshFunction}>

            <SidebarWrap>

              <NavIcon to="#">
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </NavIcon>
              {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
            </SidebarWrap>
          </SidebarNav>
        </IconContext.Provider>
      </>
    // </AuthContext.Provider>
  );

  // return (
  //   <ul>
  //     {!auth.isLoggedIn && (
  //       <li>
  //         <NavLink to="/login">LOGIN</NavLink>
  //       </li>
  //     )}
  //     {!auth.isLoggedIn && (
  //       <li>
  //         <NavLink to="/register">REGISTER</NavLink>
  //       </li>
  //     )}
  //     {!auth.isLoggedIn && (
  //       <li>
  //         <NavLink to="/Home">LOGOUT</NavLink>
  //       </li>
  //     )}

  //   </ul>
  // );
};

export default Sidebar;
