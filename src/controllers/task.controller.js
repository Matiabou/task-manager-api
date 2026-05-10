import { 
    createTaskService, 
    getTasksService, 
    updateTaskService, 
    deleteTaskService
} from '../services/task.service.js';

export const createTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    const task = await createTaskService(
      title,
      description,
      req.user.id
    );

    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

export const getTasks = async (req, res, next) => {
  try {
    const { status, page, limit } = req.query;

    const tasks = await getTasksService({
      userId: req.user.id,
      status,
      page,
      limit,
    });

    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { title, description, status } = req.body;

    const task = await updateTaskService({
      taskId: Number(id),
      title,
      description,
      status,
      userId: req.user.id,
    });

    res.json(task);
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await deleteTaskService({
      taskId: Number(id),
      userId: req.user.id,
    });

    res.json(result);
  } catch (error) {
    next(error);
  }
};