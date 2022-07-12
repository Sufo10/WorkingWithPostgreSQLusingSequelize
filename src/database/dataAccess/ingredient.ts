import { Op } from "sequelize";
import Ingredient from "../models/Ingredient";
import { GetAllIngredientsFilters } from "../types/types";
import { IngredientInput, IngredientOutput } from "../models/Ingredient";

export const create = async (
  payload: IngredientInput
): Promise<IngredientOutput> => {
  const ingredient = await Ingredient.create(payload);
  return ingredient;
};

export const update = async (
  id: number,
  payload: Partial<IngredientInput>
): Promise<IngredientOutput> => {
  const ingredient = await Ingredient.findByPk(id);
  if (!ingredient) {
    throw new Error("not found");
  }

  const updatedIngredient = await ingredient.update(payload);
  return updatedIngredient;
};

export const getById = async (id: number): Promise<IngredientOutput> => {
  const ingredient = await Ingredient.findByPk(id);
  if (!ingredient) {
    throw new Error("not found");
  }
  return ingredient;
};

export const deleteById = async (id: number): Promise<boolean> => {
  const deletedIngredient = await Ingredient.destroy({
    where: { id },
  });

  return !!deletedIngredient;
};

export const getAll = async (
  filters?: GetAllIngredientsFilters
): Promise<IngredientOutput[]> => {
  const allIngredients = await Ingredient.findAll({
    where: {
      ...(filters?.isDeleted && { deletedAt: { [Op.not]: null } }),
    },
    ...((filters?.isDeleted || filters?.includeDeleted) && { paranoid: true }),
  });
  return allIngredients;
};
