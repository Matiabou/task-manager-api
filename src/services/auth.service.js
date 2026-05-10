import {
  findUserByEmail,
  createUser,
} from '../repositories/auth.repository.js';

import {
  hashPassword,
  comparePassword,
} from '../utils/hash.js';

import { generateToken } from '../utils/jwt.js';
import { AppError } from '../utils/apperror.js';

export const registerService = async (email, password) => {
  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    throw new AppError('User already exists', 400);
  }

  const hashedPassword = await hashPassword(password);

  const user = await createUser({
    email,
    password: hashedPassword,
  });

  const token = generateToken(user);

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
    },
  };
};

export const loginService = async (email, password) => {
  const user = await findUserByEmail(email);

  if (!user) {
    throw new AppError('Invalid credentials', 401);
  }

  const isPasswordValid = await comparePassword(
    password,
    user.password
  );

  if (!isPasswordValid) {
    throw new AppError('Invalid credentials', 401);
  }

  const token = generateToken(user);

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
    },
  };
};