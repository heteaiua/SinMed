import React, { useState } from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";

import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import Button from "../Button";
import "./Sidebar.css";
import LogoImg from "../../assets/logo_file.png"

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width:100%;
  
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

/*const SinmedLink = styled(Link)`
  color: aqua;
  font-size: x-large;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-decoration: none;
  margin: auto;
`;*/

const Logo = styled.img`
  margin: 30px;
  max-width: 62px;
  height: auto;
  display: flex;
`;


const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        {/* here comes the main header  Navbar*/}
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        
          <h1 className="main-header"
            style={{
              textAlign: "left",
              marginLeft: "200px",
              color: "lightblue",
            }}
          >
            <Logo src={LogoImg}></Logo>
           {/* <SinmedLink to ="/Home">SinMed</SinmedLink>*/}
          </h1>

          <div className="login-button">
            <Button to="/login">Login</Button>
          </div>
          <div className="register-button">
            <Button to="/register">Register</Button>
          </div>
        </Nav>

         {/* here comes the proper sidebar */}
        <SidebarNav sidebar={sidebar}>
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
  );
};

export default Sidebar;
