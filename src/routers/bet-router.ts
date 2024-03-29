import { Router } from "express";
import { validateSchema } from "../middlewares/validate-schema-middleware";
import { postBet } from "../controllers/bets-controller";
import { postBetSchema } from "../schemas/bet-schema";

const betsRouter = Router();

betsRouter.post("/", validateSchema(postBetSchema), postBet);

export { betsRouter };
