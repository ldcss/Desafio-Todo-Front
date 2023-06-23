import { TaskDto } from '../../types/Task';

interface TodoDetailsProps {
  task?: TaskDto;
}

function TodoDetails({ task }: TodoDetailsProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
      <h1>{task?.name}</h1>
      <h2>{task?.description}</h2>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <h1>{task?.member}</h1>
        <h1>{task?.priority}</h1>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <h1>{task?.finished}</h1>
        <h1>{task?.finishedAt?.toDateString()}</h1>
      </div>
    </div>
  );
}

export default TodoDetails;
