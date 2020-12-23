import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 0px solid #f1f1f1;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  overflow: hidden;
  background-color: black;
  .logo {
    padding: 5px 0;
  }
  img {
    width: 70px;
    height: auto;
    position: relative;
    overflow: hidden;
    z-index: 20;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <img
          src={
            "https://res.cloudinary.com/badanga/image/upload/v1608716236/Images/mine_w2uovj.png"
          }
          alt="house"
        />
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
