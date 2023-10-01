import { Router } from "express";
import { validateSchema } from "../middlewares/validate-schema-middleware";
import { finishGame, getGameBets, getGames, postGame } from "../controllers/games-controller";
import { gameSchema } from "../schemas/game-schema";

const gamesRouter = Router();

gamesRouter
    .post("/", validateSchema(gameSchema.postGameSchema), postGame)
    .get("/", getGames)
    .get("/:id", getGameBets)
    .post("/:id/finish", validateSchema(gameSchema.finishGameSchema), finishGame);

export { gamesRouter };
