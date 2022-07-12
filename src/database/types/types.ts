import { Optional } from "sequelize/types";

export type CreateIngredient = {
  name: string;
  description?: string;
  foodGroup?: string;
};

export type UpdateIngredient = Optional<CreateIngredient, "name">;

export type FilterIngredient = {
  isDeleted?: boolean;
  includeDeleted?: boolean;
};

export interface GetAllIngredientsFilters {
  isDeleted?: boolean;
  includeDeleted?: boolean;
}
