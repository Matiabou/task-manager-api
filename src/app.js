import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerOptions from './config/swagger.js';

import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/task.routes.js';
import userRoutes from './routes/user.routes.js';
import { errorMiddleware } from './middlewares/error.middleware.js';


const app = express();

app.use(cors());
app.use(express.json());

app.use('/tasks', taskRoutes);
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use(errorMiddleware);

const specs = swaggerJsdoc(swaggerOptions);
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

export default app;

import prisma from './config/db.js';

app.get('/test', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});
