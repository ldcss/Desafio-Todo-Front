import { Paper, Typography } from '@mui/material';
import { FormContainer } from './style';

function Edit() {
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
      <Typography>EDIÇÃO DE TASKS</Typography>
      <FormContainer></FormContainer>
    </Paper>
  );
}

export default Edit;
