import { Button, TextField } from '@mui/material';
import { TaskDto } from '../../types/Task';

interface TodoDetailsProps {
  task?: TaskDto;
  handleOpen: () => void;
}

function TodoDetails({ task, handleOpen }: TodoDetailsProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        columnGap: '0px',
        width: '100%',
        height: '100%',
      }}
    >
      <TextField
        label='Nome'
        defaultValue={`${task?.name}`}
        InputProps={{
          readOnly: true,
        }}
        variant='outlined'
        style={{ width: '85%', margin: '20px auto 0px auto' }}
      />
      <TextField
        label='Descrição'
        defaultValue={`${task?.description}`}
        InputProps={{
          readOnly: true,
        }}
        variant='outlined'
        multiline
        style={{ width: '85%', margin: '20px auto 0px auto' }}
      />
      <div
        style={{
          width: '85%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <TextField
          label='Membro'
          defaultValue={`${task?.member}`}
          InputProps={{
            readOnly: true,
          }}
          variant='outlined'
          style={{ width: '45%', marginTop: '20px' }}
        />
        <TextField
          label='Prioridade'
          defaultValue={`${task?.priority}`}
          InputProps={{
            readOnly: true,
          }}
          variant='outlined'
          style={{ width: '45%', marginTop: '20px' }}
        />
      </div>
      <div
        style={{
          width: '85%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <TextField
          label='Status'
          defaultValue={task?.finished ? 'Finalizado' : 'Não finalizado'}
          InputProps={{
            readOnly: true,
          }}
          variant='outlined'
          style={{ width: '45%', marginTop: '20px' }}
        />

        <TextField
          label='Data de término'
          defaultValue={!task?.finishedAt ? 'Sem Data' : task?.finishedAt?.toLocaleDateString()}
          InputProps={{
            readOnly: true,
          }}
          variant='outlined'
          style={{ width: '45%', marginTop: '20px' }}
        />
      </div>
      <Button
        variant='contained'
        type='submit'
        style={{
          position: 'relative',
          height: '3em',
          width: '100%',
          maxWidth: '8em',
          margin: '20px 20px 20px auto',
        }}
        onClick={() => handleOpen()}
      >
        Voltar
      </Button>
    </div>
  );
}

export default TodoDetails;
