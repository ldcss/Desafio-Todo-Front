import { Paper } from '@mui/material';
import { FormContainer } from './style';

function Form() {
  return (
    <Paper
      sx={{
        height: '90vh',
        width: '100vw',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
      }}
    >
      <h1>CADASTRO DE TASKS</h1>
      <FormContainer></FormContainer>
    </Paper>
  );
}

export default Form;
