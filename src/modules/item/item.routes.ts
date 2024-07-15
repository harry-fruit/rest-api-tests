import { Router } from "express";
import ItemController from "./item.controller";


const itemRoutes =  Router();
const itemController = new ItemController();

itemRoutes.post("/", itemController.createItem);
itemRoutes.get("/:id", itemController.getItemById);
itemRoutes.put("/:id", itemController.updateItem);
itemRoutes.delete("/:id", itemController.deleteItem);

export default itemRoutes;