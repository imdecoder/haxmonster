import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import NewCompetitionBtn from './NewCompetitionBtn';
import Competitions from './Competitions/Competitions';

const Container = styled.div`
  position: relative;
  width: auto;
  margin-left: 16rem;
`;

const Content = styled.div`
  margin: 0 4rem;
`;

const Main = () => {
    return (
        <Container>
            <Nav />
            <NewCompetitionBtn />
            <Content>
                <Competitions title="Competitions" count={8} data={null} />
            </Content>
        </Container>
    );
};

export default Main;
