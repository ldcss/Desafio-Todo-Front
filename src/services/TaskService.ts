import { AxiosResponse } from 'axios';
import { Task } from '../types/Task';
import api from './api';

export class TaskService {
  static async getTasks(): Promise<AxiosResponse<Task>> {
    const response = await api.get('/task');
    return response;
  }
}
