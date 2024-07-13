import express from "express";
import itemRoutes from "./routes/items.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/items", itemRoutes);

export default app;