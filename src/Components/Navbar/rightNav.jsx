import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding-right: 50px;
  li {
    padding: 10px 10px 20px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #303030;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: auto;
    width: 100%;
    padding-top: 3.5rem;
    padding-right: 0;

    transition: transform 0.3s ease-in-out;

    li {
      text-align: center;
    }
  }
`;

const RightNav = ({ open, setOpen }) => {
  return (
    <Ul open={open}>
      <li>
        <a className="contacts" href="#home" onClick={() => setOpen(!open)}>
          Home
        </a>
      </li>
      <li>
        <a className="contacts" href="#about-me" onClick={() => setOpen(!open)}>
          About me
        </a>
      </li>
      <li>
        <a className="contacts" href="#services" onClick={() => setOpen(!open)}>
          Services
        </a>
      </li>
      <li>
        <a className="contacts" href="#skills" onClick={() => setOpen(!open)}>
          Skills
        </a>
      </li>
      <li>
        <a className="contacts" href="#projects" onClick={() => setOpen(!open)}>
          Projects
        </a>
      </li>
    </Ul>
  );
};

export default RightNav;
