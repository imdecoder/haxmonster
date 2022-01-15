import React from 'react';
import styled from "styled-components";
import Profile from "./Profile";
import Menu from "./Menu/Menu";
import ToggleSwitch from "./ToggleSwitch";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;  
  background-color: ${({theme}) => theme.secondary};
  top: 0;
  bottom: 0;
  left: 0;
  width: 16rem;
  align-items: center;
`;

const Sidebar = () => {
    return (
        <Container>
            <Profile />
            <Menu />
            <ToggleSwitch />
        </Container>
    );
};

export default Sidebar;
