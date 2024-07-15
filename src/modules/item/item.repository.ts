import { PrismaClient } from "@prisma/client";
import { CreateItemDTO, Item, UpdateItemDTO } from "./item.model";

export default class ItemRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createItem(payload: CreateItemDTO): Promise<Omit<Item, "id">> {
    return await this.prisma.item.create({
      data: payload,
      select: {
        uniqueCode: true,
        name: true,
        description: true,
      },
    });
  }

  async getItemById(id: number): Promise<Item | null> {
    const item = await this.prisma.item.findUnique({
      where: {
        id: id,
      },
    });

    return item;
  }

  async deleteItem(id: number): Promise<void> {
    await this.prisma.item.delete({
      where: {
        id: id,
      },
    });
  }

  async updateItem({ id, uniqueCode, name, description }: UpdateItemDTO): Promise<Item> {
    return await this.prisma.item.update({
      where: {
        id: id,
      },
      data: {
        uniqueCode,
        name,
        description,
      }
    });
  }

}
