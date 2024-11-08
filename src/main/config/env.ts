export default {
  baseUrl: process.env.BASE_URL ?? "http://localhost:3030",
  enviroment: process.env.NODE_ENV ?? "development",
  port: process.env.HTTP_PORT ?? 3030,
  jwtSecret: process.env.JWT_SECRET_KEY ?? "any-secret",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? "1h",
};
