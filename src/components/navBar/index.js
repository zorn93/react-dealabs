import React, { Fragment } from "react";
import { FaPlus } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import styled from "styled-components";
import logo from "../../logo/dealabs.png";

const navBar = () => {
  return (
    <Fragment>
      <NavContainer>
        <StyledLogo src={logo} alt="dealabs" />
        <FaUserAltDiv>
          <FaUserAlt fill="white" />
        </FaUserAltDiv>
        <FaPlusDiv>
          <FaPlus fill="white" />
        </FaPlusDiv>
      </NavContainer>
    </Fragment>
  );
};

const FaPlusDiv = styled.div`
  padding-right: 30px;
`;

const FaUserAltDiv = styled.div`
  padding-left: 100px;
`;

const NavContainer = styled.header`
  box-sizing: border-box;
  display: flex;
  background-color: black;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const StyledLogo = styled.img`
  height: 4em;
  width: auto;
`;

export default navBar;
