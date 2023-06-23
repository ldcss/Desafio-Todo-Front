/* eslint-disable react/jsx-no-bind */
import { useEffect, useState } from 'react';
import { CardType, FlexContainer, Item } from './style';
import { TaskService } from '../../services/TaskService';
import { toast } from 'react-toastify';
import { TaskDto } from '../../types/Task';
import { Grid, Grow, Modal } from '@mui/material';
import TodoDetails from '../TodoDetails';

function Todo() {
  const [tasks, setTasks] = useState<TaskDto[]>([]);
  const [openTask, setOpenTask] = useState<TaskDto | undefined>(undefined);
  const [open, setOpen] = useState<boolean>(false);

  async function getAllTasks() {
    try {
      const { data } = await TaskService.getTasks();
      setTasks(data);
    } catch {
      toast.error('Não foi possível receber as tasks! Tente novamente mais tarde.');
    }
  }
  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <Grid
      container
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      style={{ width: '100%', height: '100%' }}
    >
      <ul>
        {tasks.map(task => (
          <>
            <Item
              onClick={() => {
                setOpenTask(task);
                setOpen(true);
              }}
            >
              <p>{task.name}</p>
              <FlexContainer>
                <div style={{ display: 'flex', flexDirection: 'row', columnGap: '10px' }}>
                  <p>Prioridade:</p>
                  <p>{task.priority}</p>
                </div>
                <p style={{ color: task.finished ? 'blue' : 'red' }}>
                  {task.finished ? 'finalizado' : 'não finalizado'}
                </p>
              </FlexContainer>
            </Item>
            <div style={{ width: '100%', margin: '12px' }} />
          </>
        ))}
      </ul>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Grow in={open} {...(open ? { timeout: 500 } : {})}>
          <CardType>
            <TodoDetails task={openTask} handleOpen={() => setOpen(false)} />
          </CardType>
        </Grow>
      </Modal>
    </Grid>
  );
}

export default Todo;
