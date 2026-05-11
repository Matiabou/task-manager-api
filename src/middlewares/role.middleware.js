import { AppError } from '../utils/apperror.js';

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