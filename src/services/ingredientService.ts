import * as ingredientDal from "../database/dataAccess/ingredient";
import { GetAllIngredientsFilters } from "../database/types/types";
import {
  IngredientInput,
  IngredientOutput,
} from "../database/models/Ingredient";

export const create = (payload: IngredientInput): Promise<IngredientOutput> => {
  return ingredientDal.create(payload);
};
export const update = (
  id: number,
  payload: Partial<IngredientInput>
): Promise<IngredientOutput> => {
  return ingredientDal.update(id, payload);
};
export const getById = (id: number): Promise<IngredientOutput> => {
  return ingredientDal.getById(id);
};
export const deleteById = (id: number): Promise<boolean> => {
  return ingredientDal.deleteById(id);
};
export const getAll = (
  filters: GetAllIngredientsFilters
): Promise<IngredientOutput[]> => {
  return ingredientDal.getAll(filters);
};
