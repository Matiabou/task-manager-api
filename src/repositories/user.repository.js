import prisma from '../config/db.js';

export const findUserById = async (id) => {
  return prisma.user.findUnique({
    where: { id },
  });
};

export const getUsersRepository = async () => {
  return prisma.user.findMany({
    select: {
      id: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });
};