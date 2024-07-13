import { Request, Response } from "express";

export const createItem = (req: Request, res: Response) => {
    res.status(201).json({ message: "Item created!" });
}

export const updateItem = (req: Request, res: Response) => {
    res.status(204).send();
}

export const deleteItem = (req: Request, res: Response) => {
    res.status(204).send();
}

export const getItemById = (req: Request, res: Response) => {
    res.status(200).json({ message: "Item found!" });
}