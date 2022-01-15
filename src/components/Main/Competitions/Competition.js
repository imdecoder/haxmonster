import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: ${({theme}) => theme.primary};
  border-bottom: 1px solid rgba(190, 190, 190, .22);
  align-items: center;
  transition: all ease-in-out 300ms;
  cursor: pointer;
  padding: 1rem 0;
  
  &:hover {
    background-color: ${({theme}) => theme.secondary};
  }
`;

const Text = styled.h1`
  color: ${({theme}) => theme.textColor};
  font-size: .8rem;
  font-weight: 500;
  margin: 0;
`;

const Title = styled(Text)`
  color: #B2BFE1;
  font-size: .8rem;
  margin-top: 2px;
`;

const SubTitle = styled(Text)`
  color: #B2BFE1;
  font-size: .6rem;
  margin-top: 2px;
`;

const League = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
`

const LeagueText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const LeagueImg = styled.img`
  width: 35px;
  height: 35px;
`;

const Season = styled(Text)`
  width: 15%;
`;

const Week = styled(Text)`
  width: 10%;
`;

const Status = styled.div`
  display: flex;
  align-items: center;
`;

const StatusIndicator = styled.div`
  position: absolute;
  right: 7rem;
  width: 15px;
  height: 15px;
  background-color: ${props => props.color};
  border-radius: 10px;
  margin-left: 1rem;
`;

const Wrapper = styled.div`
  width: 15%;
`;

const Competition = ({ data }) => {
    const { league, season, week, status } = data;

    return (
        <Container>
            <League>
                <LeagueImg src={require(`../../../assets/images/lostround.png`)} />
                <LeagueText>
                    <Title>
                        {league}
                    </Title>
                    <SubTitle>
                        {league}
                    </SubTitle>
                </LeagueText>
            </League>
            <Season>
                {season}
            </Season>
            <Week>
                {week}
            </Week>
            <Status>
                <Text>
                    {status}
                </Text>
                {(() => {
                    switch (status) {
                        case 1: return <StatusIndicator color="#F17E7E" />;
                        case 2: return <StatusIndicator color="#FFD056" />;
                        case 3: return <StatusIndicator color="#75C282" />;
                        default: return <StatusIndicator color="#AAA5A5" />;
                    }
                })()}
            </Status>
        </Container>
    );
};

export default Competition;
