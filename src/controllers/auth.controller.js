import {
  registerService,
  loginService,
} from '../services/auth.service.js';

import { getCurrentUserService } from '../services/user.service.js';

export const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const data = await registerService(email, password);

    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const data = await loginService(email, password);

    res.json(data);
  } catch (error) {
    next(error);
  }
};

export const me = async (req, res, next) => {
  try {
    const user = await getCurrentUserService(req.user.id);

    res.json(user);
  } catch (error) {
    next(error);
  }
};