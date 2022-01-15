import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-left: 3px solid ${props => props.active ? props.theme.activeMenu : 'transparent'};
  transition: .2s all ease-in-out;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  padding: .3rem;
  padding-left: 2rem;
  margin-bottom: 1rem;
  
  &:hover {
    background-color: rgba(0, 0, 0, .1);
  }
`;

const Icon = styled.span`
  color: ${props => props.active ? props.theme.activeMenu : '#aaa5a5'};
  font-size: 1rem;
  margin-right: 1rem;
`;

const Title = styled.h1`
  color: ${props => props.active ? props.theme.activeMenu : '#aaa5a5'};
  font-size: .9rem;
  font-weight: 300;
`;

const MenuItem = ({ title, icon, active }) => {
    return (
        <Container active={active}>
            <Icon className="iconify" active={active} data-inline="false" data-icon={`mdi:${icon}`}></Icon>
            <Title active={active}>
                {title}
            </Title>
        </Container>
    );
};

export default MenuItem;
