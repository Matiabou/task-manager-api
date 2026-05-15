const swaggerOptions = {
  definition: {
    openapi: '3.0.0',

    info: {
      title: 'Task Manager API',
      version: '1.0.0',
      description: 'Professional Task Manager API',
    },

    servers: [
      {
        url: process.env.SWAGGER_API_URL || '/',
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },

    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: ['./src/routes/*.js'],
};

export default swaggerOptions;