export interface CreateTaskDto {
  name: string;
  description?: string;
  priority?: string;
  member?: string;
}

export interface TaskDto extends CreateTaskDto {
  id: number;
  finished: boolean;
  finishedAt?: Date;
}
