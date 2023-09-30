import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema-middleware";
import { postGame } from "../controllers/games-controller";
import { postGameSchema } from "../schemas/game-schema";

const gamesRouter = Router();

gamesRouter.post("/", validateSchema(postGameSchema), postGame);

export { gamesRouter };
