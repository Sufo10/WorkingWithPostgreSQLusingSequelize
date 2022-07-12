import sequelizeConnection from "./config";

const dbInit = async () => {
  await sequelizeConnection.sync({ alter: true });
};
export default dbInit;
