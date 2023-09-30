import { Router } from "express";
import { postParticipant } from "../controllers/participants-controller";

const participantsRouter = Router();

participantsRouter.post("/", postParticipant);

export { participantsRouter };
