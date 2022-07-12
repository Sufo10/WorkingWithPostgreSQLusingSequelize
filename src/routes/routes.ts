import { Router, Request, Response } from "express";
import * as ingredientController from "../controllers/controller";
import {
  CreateIngredient,
  UpdateIngredient,
  FilterIngredient,
} from "../database/types/types";
const router: Router = Router();

router.post("/ingredient", async (req: Request, res: Response) => {
  const payload: CreateIngredient = req.body;

  const result = await ingredientController.create(payload);
  return res.status(200).send(result);
});

router.get("/ingredient/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const result = await ingredientController.getById(id);
  return res.status(200).send(result);
});

router.put("/ingredient/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const payload: UpdateIngredient = req.body;

  const result = await ingredientController.update(id, payload);
  return res.status(201).send(result);
});

router.delete("/ingredient/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const result = await ingredientController.deleteById(id);
  return res.status(204).send({
    success: result,
  });
});

router.get("/ingredient", async (req: Request, res: Response) => {
  const filters: FilterIngredient = req.query;

  const results = await ingredientController.getAll(filters);
  return res.status(200).send(results);
});

export default router;
