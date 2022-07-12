import { IngredientOutput } from "../database/models/Ingredient";
import { IngredientAttributes } from "../database/models/Ingredient";

export const toIngredient = (
  ingredient: IngredientOutput
): IngredientAttributes => {
  return {
    id: ingredient.id,
    name: ingredient.name,
    description: ingredient.description,
    foodGroup: ingredient.foodGroup,
    createdAt: ingredient.createdAt,
    updatedAt: ingredient.updatedAt,
    deletedAt: ingredient.deletedAt,
  };
};
