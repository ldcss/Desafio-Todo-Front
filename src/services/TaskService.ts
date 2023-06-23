import { AxiosResponse } from 'axios';
import { TaskDto, CreateTaskDto } from '../types/Task';
import api from './api';

export class TaskService {
  static async getTasks(): Promise<AxiosResponse<TaskDto[]>> {
    const response = await api.get('/task');
    return response;
  }

  static async postTask(task: CreateTaskDto): Promise<AxiosResponse<CreateTaskDto>> {
    const response = await api.post('/task', task);
    return response;
  }
}
