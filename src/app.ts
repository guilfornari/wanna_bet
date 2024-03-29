import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Request, Response } from "express";
import { participantsRouter } from "./routers/participants-router";
import { gamesRouter } from "./routers/game-router";
import { betsRouter } from "./routers/bet-router";
import { handleErrors } from "./middlewares/error-handling-middleware";

dotenv.config();

const app = express();
app
    .use(cors())
    .use(express.json())
    .get("/health", (req: Request, res: Response) => res.send("Server is alive and well!"))
    .use("/participants", participantsRouter)
    .use("/games", gamesRouter)
    .use("/bets", betsRouter)
    .use(handleErrors);

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`Running server on port ${PORT}`));