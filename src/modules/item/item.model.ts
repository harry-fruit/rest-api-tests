import { Item as PrismaItem } from "@prisma/client";

export type Item = PrismaItem;

export interface CreateItemDTO {
    uniqueCode: string;
    name: string;
    description?: string;
}

export interface UpdateItemDTO {
    id: number;
    uniqueCode?: string;
    name?: string;
    description?: string;
};