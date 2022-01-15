import React from 'react';
import styled from 'styled-components';

const Switch = styled.div`
  display: flex;
  flex-shrink: 0;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: ${({theme}) => theme.switchWidth};
  height: ${({theme}) => theme.switchHeight};
  border-radius: 50em;
  align-items: center;
  padding: ${({theme}) => theme.switchPadding} 0;
  
  .switch__input,
  .switch__label {
    position: absolute;
    top: 0;
    left: 0;
  }
  
  .switch__input {
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
    padding: 0;
    pointer-events: none;
    
    &:checked + .switch__label {
      background-color: ${({theme}) => theme.colorGray};
      cursor: pointer;
    }

    &:checked + .switch__label + .switch__marker {
      left: calc(100% - ${({theme}) => theme.switchHeight} + ${({theme}) => theme.switchPadding});
    }

    &:focus + .switch__label,
    &:active + .switch__label {
      box-shadow: 0 0 0 3px alpha(${({theme}) => theme.primary}, .2);
    }
  }

  .switch__label {
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.textColor};
    color: transparent;
    border-radius: inherit;
    transition: background ${({theme}) => theme.switchAnimationDuration};
    user-select: none;
    z-index: 1;
  }
  
  .switch__marker {
    position: relative;
    left: ${({theme}) => theme.switchPadding};
    width: calc(${({theme}) => theme.switchHeight} - ${({theme}) => theme.switchPadding} * 2);
    height: calc(${({theme}) => theme.switchHeight} - ${({theme}) => theme.switchPadding} * 2);
    background-color: ${({theme}) => theme.primary};
    border-radius: 50%;
    box-shadow: 0 1px 1px hsla(0, 0%, 0%, .25);
    transition: left ${({theme}) => theme.switchAnimationDuration};
    will-change: left;
    pointer-events: none;
    z-index: 2;
  }
`;

const ToggleSwitch = () => {
    return (
        <Switch>
            <input type="checkbox" className="switch__input" id="switchCheckbox" onClick={() => {}} />
            <label htmlFor="switchCheckbox" className="switch__label" aria-hidden="true">
                On
            </label>
            <div className="switch__marker" aria-hidden="true"></div>
        </Switch>
    );
};

export default ToggleSwitch;
