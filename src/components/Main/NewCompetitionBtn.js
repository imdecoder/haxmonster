import React from 'react';
import styled from 'styled-components';

const AddButton = styled.a`
  display: flex;
  position: absolute;
  top: 6rem;
  right: 4rem;
  background-color: ${({theme}) => theme.colorGreen};
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const AddIcon = styled.span`
  color: #fff;
  font-size: 36px;
`;

const NewCompetitionBtn = () => {
    return (
        <AddButton>
            <AddIcon className="iconify" data-inlinw="false" data-icon="mdi:plus"></AddIcon>
        </AddButton>
    );
};

export default NewCompetitionBtn;
