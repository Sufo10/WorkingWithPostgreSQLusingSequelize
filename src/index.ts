import express, { Application, Request, Response } from "express";
import router from "./routes/routes";
import dbInit from "./database/init";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: `Welcome to the cookbook API!`,
  });
});

app.use("/", router);
app.listen(process.env.PORT, async () => {
  dbInit();
  console.log(`Server is running on port ${process.env.PORT}`);
});
