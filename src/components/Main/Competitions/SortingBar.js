import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: ${({theme}) => theme.secondary};
  border-radius: 5px;
  padding: .4rem 1rem;
  margin: 2rem 0;
`;

const Text = styled.h1`
  color: ${({theme}) => theme.textColor};
  font-size: .6rem;
  font-weight: 500;
  text-transform: uppercase;
`;

const League = styled(Text)`
  width: 30%;
`;

const Season = styled(Text)`
  width: 25%;
`;

const Week = styled(Text)`
  width: 30%;
`;

const Status = styled(Text)`
  width: 15%;
`;

const Competitions = ({ title, count, data }) => {
    return (
        <Container>
            <League>
                League
            </League>
            <Season>
                Season
            </Season>
            <Week>
                Week 7
            </Week>
            <Status>
                Status
            </Status>
        </Container>
    );
};

export default Competitions;
