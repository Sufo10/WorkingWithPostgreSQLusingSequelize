import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
dotenv.config();

const db = process.env.DB_NAME;
const userName = process.env.USER;
const password = process.env.PASSWORD;

const sequelizeConnection = new Sequelize({
  database: db,
  dialect: "postgres",
  username: userName,
  password: password,
  storage: ":memory:",
  models: [__dirname + "/database/models"],
});

export default sequelizeConnection;
