import { NextFunction, Request, Response } from "express";
import ItemRepository from "./item.repository";
import ItemService from "./item.service";
import { BadRequestError } from "../../utils/errorHandlers/BadRequestError";
import { Item } from "./item.model";


export default class ItemController {
    private itemService: ItemService;

    constructor() {
        const itemRepository = new ItemRepository();
        this.itemService = new ItemService(itemRepository);
    }

    createItem = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { uniqueCode, name, description } = req.body;
            //TODO: Create a validation schema for the request body
            if (!uniqueCode || !name) {
                throw new BadRequestError("Missing required fields");
            }
    
            const item = await this.itemService.createItem({ uniqueCode, name, description });
            res.status(201).json(item);

        } catch (error) {
            next(error);
        }
    }

    updateItem = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            //TODO: Create a validation schema for the request params
            if (!id) {
                throw new BadRequestError("Missing required fields");
            }
    
            const { uniqueCode, name, description } = req.body;

            const item = await this.itemService.updateItem({ id: parseInt(id), uniqueCode, name, description });
            res.status(200).json(item);
        } catch (error) {
            next(error);
        }
    }

    deleteItem = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;

            //TODO: Create a validation schema for the request params
            if (!id) {
                throw new BadRequestError("Missing required fields");
            }

            await this.itemService.deleteItem(parseInt(id));
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }

    getItemById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;

            //TODO: Create a validation schema for the request params
            if (!id) {
                throw new BadRequestError("Missing required fields");
            }

            const item: Item = await this.itemService.getItemById(parseInt(id));
            res.status(200).json(item);
        } catch (error) {
            next(error);
        }
    }

};