import { getUsersService } from '../services/user.service.js';

export const getUsers = async (req, res, next) => {
  try {
    const users = await getUsersService();

    res.json(users);
  } catch (error) {
    next(error);
  }
};