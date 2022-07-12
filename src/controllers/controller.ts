import * as service from "../services/ingredientService";
import { IngredientAttributes } from "../database/models/Ingredient";
import * as mapper from "./mapper";

export const create = async (payload: any): Promise<IngredientAttributes> => {
  return mapper.toIngredient(await service.create(payload));
};

export const update = async (
  id: number,
  payload: any
): Promise<IngredientAttributes> => {
  return mapper.toIngredient(await service.update(id, payload));
};

export const getById = async (id: number): Promise<IngredientAttributes> => {
  return mapper.toIngredient(await service.getById(id));
};

export const deleteById = async (id: number): Promise<Boolean> => {
  const isDeleted = await service.deleteById(id);
  return isDeleted;
};

export const getAll = async (filters: any): Promise<IngredientAttributes[]> => {
  return (await service.getAll(filters)).map(mapper.toIngredient);
};
