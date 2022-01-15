import React from 'react';
import styled from 'styled-components';
import Image from '../../assets/images/profilelg.png';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  margin-bottom: 3rem;
`;

const ProfileImg = styled.img`
  height: 2rem;
  cursor: pointer;
  margin: 0 1rem;
`;

const MessageIcon = styled.span`
  color: ${({theme}) => theme.colorGray};
  font-size: 27px;
  cursor: pointer;
  margin-right: 1rem;
`;

const Nav = () => {
    return (
        <Container>
            <MessageIcon className="iconify" data-inline="false" data-icon="mdi:email"></MessageIcon>
            <ProfileImg src={Image} />
        </Container>
    );
};

export default Nav;
