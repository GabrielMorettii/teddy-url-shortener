import express, { type Express } from "express";

export const setupApp = (): Express => {
  const app = express();

  app.get("/", (req, res) => {
    res.send("Hello, World!");
  });

  return app;
};
