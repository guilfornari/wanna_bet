import { Router } from "express";
import { validateSchema } from "../middlewares/validate-schema-middleware";
import { getGameBets, getGames, postGame } from "../controllers/games-controller";
import { postGameSchema } from "../schemas/game-schema";

const gamesRouter = Router();

gamesRouter
    .post("/", validateSchema(postGameSchema), postGame)
    .get("/", getGames)
    .get("/:id", getGameBets);

export { gamesRouter };
