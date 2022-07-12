import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../config";

//All possible attributes of the model
export interface IngredientAttributes {
  id: number;
  name: string;
  description?: string;
  foodGroup?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

//type of object passed to Sequelize's model.create
export interface IngredientInput extends Optional<IngredientAttributes, "id"> {}

//returned object from model.create, model.update, model.findOne
export interface IngredientOutput extends Required<IngredientAttributes> {}

class Ingredient
  extends Model<IngredientAttributes, IngredientInput>
  implements IngredientAttributes
{
  public id!: number;
  public name!: string;
  public description!: string;
  public foodGroup!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Ingredient.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
    },
    foodGroup: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,

    //adds a deletedAt attribute when destroy method is invoked
    paranoid: true,
  }
);

export default Ingredient;
