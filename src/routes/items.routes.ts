import { Router } from "express";
import { createItem, deleteItem, getItemById, updateItem } from "../controller/items.controllers";


const itemRoutes =  Router();

itemRoutes.post("/", createItem);
itemRoutes.get("/:id", getItemById);
itemRoutes.put("/:id", updateItem);
itemRoutes.delete("/:id", deleteItem);

export default itemRoutes;