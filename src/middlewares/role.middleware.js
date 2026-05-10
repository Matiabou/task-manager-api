import { AppError } from '../utils/AppError.js';

export const roleMiddleware = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('Forbidden; ' + req.user.role + ' is not allowed', 403)
      );
    }

    next();
  };
};