import { Card } from '@mui/material';
import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: '16px';
`;

export const Item = styled.li`
  padding: 13px 10px 13px 24px;
  width: 500px;
  min-height: 50px;
  background: '#da2535';
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  transition: all 800ms;

  button {
    background: transparent;
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.6;
    }
  }
`;

export const CardType = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'initial',
  alignItems: 'center',
  position: 'fixed',
  padding: '0px',
  border: 'none',
  borderRadius: '5px',
  color: '#000000',
  bottom: '25%',
  right: '25%',
  minWidth: '50vw',
  minHeight: '50vh',
});
