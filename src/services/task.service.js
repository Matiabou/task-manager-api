import { 
    createTaskRepository,
    getTasksRepository, 
    findTaskByIdRepository, 
    updateTaskRepository,  
    softDeleteTaskRepository
} from '../repositories/task.repository.js';

import { AppError } from '../utils/apperror.js';

export const createTaskService = async (
  title,
  description,
  userId
) => {
  const task = await createTaskRepository({
    title,
    description,
    userId,
  });

  return task;
};

export const getTasksService = async ({
  userId,
  status,
  page = 1,
  limit = 10,
}) => {
  const tasks = await getTasksRepository({
    userId,
    status,
    page: Number(page),
    limit: Number(limit),
  });

  return tasks;
};

export const updateTaskService = async ({
  taskId,
  title,
  description,
  status,
  userId,
}) => {
  const task = await findTaskByIdRepository(taskId);

  if (!task || task.userId !== userId) {
    throw new AppError('Task not found', 404);
  }

  const updatedTask = await updateTaskRepository(
    taskId,
    {
      ...(title && { title }),
      ...(description && { description }),
      ...(status && { status }),
    }
  );

  return updatedTask;
};

export const deleteTaskService = async ({
  taskId,
  userId,
}) => {
  const task = await findTaskByIdRepository(taskId);

  if (!task || task.userId !== userId) {
    throw new AppError('Task not found', 404);
  }

  await softDeleteTaskRepository(taskId);

  return {
    message: 'Task deleted successfully',
  };
};