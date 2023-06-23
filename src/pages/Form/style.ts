import styled from 'styled-components';
import Box from '@mui/material/Box/Box';

export const Container = styled(Box)({
  height: '90vh',
  width: '100vw',
  backgroundColor: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: 'column',
});

export const FormComponent = styled('form')({
  minHeight: '50vh',
  minWidth: '50vw',
  backgroundColor: '#E6E6FA',
  borderRadius: '20px',
  border: '2px solid black;',
  borderColor: '#000000',
});
