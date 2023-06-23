/* eslint-disable react/jsx-no-bind */
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { FormComponent, Container } from './style';
import { ChangeEvent, FormEvent, useState } from 'react';
import { CreateTaskDto } from '../../types/Task';
import { TaskService } from '../../services/TaskService';
import { ToastContainer, toast } from 'react-toastify';

const initialTask: CreateTaskDto = {
  name: '',
  description: '',
  priority: '',
  member: '',
};

function Form() {
  const [task, setTask] = useState<CreateTaskDto>(initialTask);

  function updateTaskData(event: ChangeEvent<any> | SelectChangeEvent<string>) {
    return setTask({ ...task, [event.target.name]: event.target.value });
  }

  async function postTask() {
    TaskService.postTask(task)
      .then(() => toast.success('Task criada com sucesso!'))
      .catch(() => toast.error('Task não foi criada. Tente novamente!'));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    postTask();
  }
  return (
    <Container>
      <ToastContainer position='top-right' />
      <h1>Cadastro de task</h1>
      <FormComponent onSubmit={submit}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '1rem',
          }}
        >
          <TextField
            name='name'
            label='Nome'
            type='text'
            required
            onChange={updateTaskData}
            style={{ width: '80%', marginTop: '20px' }}
            value={task.name}
          />
          <TextField
            name='description'
            label='Descrição'
            type='text'
            required={false}
            onChange={updateTaskData}
            style={{ width: '80%' }}
            value={task.description}
            multiline
          />
          <FormControl style={{ width: '80%' }}>
            <InputLabel>Prioridade</InputLabel>
            <Select
              name='priority'
              label='Prioridade'
              onChange={updateTaskData}
              required={false}
              value={task.priority}
            >
              <MenuItem value='Baixa'>Baixa</MenuItem>
              <MenuItem value='Media'>Média</MenuItem>
              <MenuItem value='Alta'>Alta</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ width: '80%' }}>
            <InputLabel>Membro</InputLabel>
            <Select
              name='member'
              label='Membro'
              onChange={updateTaskData}
              required={false}
              value={task.member}
            >
              <MenuItem value='Membros'>Membros</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant='contained'
            type='submit'
            style={{
              position: 'relative',
              height: '3em',
              width: '100%',
              maxWidth: '8em',
              marginBottom: '20px',
              marginLeft: 'auto',
              marginRight: '20px',
            }}
          >
            Salvar
          </Button>
        </div>
      </FormComponent>
    </Container>
  );
}

export default Form;
