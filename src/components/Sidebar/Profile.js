import React from 'react';
import styled from 'styled-components';
import Image from '../../assets/images/profilelg.png';

const Container = styled.div`
  text-align: center;
  margin-top: 2.5rem;
`;

const ProfileImg = styled.img`
  height: 5rem;
`;

const ProfileName = styled.h1`
  color: ${({theme}) => theme.textColor};
  font-size: 1rem;
  font-weight: 300;
`;

const Profile = () => {
    return (
        <Container>
            <ProfileImg src={Image} />
            <ProfileName>
                Emin Arif Pirinç
            </ProfileName>
        </Container>
    );
};

export default Profile;
