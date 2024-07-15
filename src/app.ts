import express from "express";
import itemRoutes from "./modules/item/item.routes";
import { loadEnvVariables } from "./config/environment";
import { errorHandler } from "./middlewares/errorHandler.middleware";

loadEnvVariables();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/items", itemRoutes);

// Middleware - Error handler
app.use(errorHandler);

export default app;