import { findUserById, getUsersRepository } from '../repositories/user.repository.js';

export const getCurrentUserService = async (userId) => {
  const user = await findUserById(userId);

  if (!user) {
    throw new Error('User not found');
  }

  return {
    id: user.id,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
  };
};

export const getUsersService = async () => {
  return await getUsersRepository();
};