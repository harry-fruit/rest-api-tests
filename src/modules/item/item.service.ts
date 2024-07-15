import { BadRequestError } from "../../utils/errorHandlers/BadRequestError";
import { NotFoundError } from "../../utils/errorHandlers/NotFoundError";
import { CreateItemDTO, Item, UpdateItemDTO } from "./item.model";
import ItemRepository from "./item.repository";

export default class ItemService {
  
  constructor(private itemRepository: ItemRepository) {
    this.itemRepository = itemRepository;
  }

  createItem = async (payload: CreateItemDTO): Promise<Omit<Item, "id">> => {
    return await this.itemRepository.createItem(payload);
  }

  updateItem = async ({ id, uniqueCode, name, description }: UpdateItemDTO): Promise<Item> => {
    
    //TODO: Apply validation
    if (uniqueCode === null || name === null) {
      throw new BadRequestError("'uniqueCode' and 'name' cannot be null");
    }
  
    const item = await this.itemRepository.getItemById(id);

    if (!item) {
      throw new NotFoundError("Item not found");
    }
    
    return this.itemRepository.updateItem({ id, uniqueCode, name, description });
  }

  deleteItem = async (id: number): Promise<void> => {
    const item = await this.itemRepository.getItemById(id);

    if (!item) {
      throw new NotFoundError("Item not found");
    }

    return this.itemRepository.deleteItem(id); 
  }

  getItemById = async (id: number): Promise<Item> => {
    const item = await this.itemRepository.getItemById(id);

    if (!item) {
      throw new NotFoundError("Item not found");
    }

    return item;
  }
}
