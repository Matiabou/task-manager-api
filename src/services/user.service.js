import { findUserById, getUsersRepository } from '../repositories/user.repository.js';
import { AppError } from '../utils/apperror.js';

export const getCurrentUserService = async (userId) => {
  const user = await findUserById(userId);

  if (!user) {
    throw new AppError('User not found', 404);
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