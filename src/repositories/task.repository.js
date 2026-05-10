import prisma from '../config/db.js';

export const createTaskRepository = async (data) => {
  return prisma.task.create({
    data,
  });
};

export const getTasksRepository = async ({
  userId,
  status,
  page,
  limit,
}) => {
  return prisma.task.findMany({
    where: {
      userId,
      deleted: false,

      ...(status && { status }),
    },

    skip: (page - 1) * limit,

    take: limit,

    orderBy: {
      createdAt: 'desc',
    },
  });
};

export const findTaskByIdRepository = async (taskId) => {
  return prisma.task.findFirst({
    where: {
      id: taskId,
      deleted: false,
    },
  });
};

export const updateTaskRepository = async (
  taskId,
  data
) => {
  return prisma.task.update({
    where: {
      id: taskId,
    },
    data,
  });
};

export const softDeleteTaskRepository = async (
  taskId
) => {
  return prisma.task.update({
    where: {
      id: taskId,
    },
    data: {
      deleted: true,
    },
  });
};