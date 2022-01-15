import React from 'react';
import styled from 'styled-components';
import SortingBar from './SortingBar';
import Competition from './Competition';

const Container = styled.div`
  
`;

const Title = styled.h1`
  display: flex;
  color: ${({theme}) => theme.textColor};
  font-size: 1.3rem;
  font-weight: 500;
  align-items: center;
`;

const CompetitionCount = styled.div`
  display: flex;
  width: 28px;
  height: 28px;
  background-color: ${({theme}) => theme.header};
  color: ${({theme}) => theme.headerNumber};
  font-size: 1rem;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
`;

const Competitions = ({ title, count, data }) => {
    return (
        <Container>
            <Title>
                {title}
                <CompetitionCount>
                    {count}
                </CompetitionCount>
            </Title>
            <SortingBar />
            <Competition data={null} />
        </Container>
    );
};

export default Competitions;
