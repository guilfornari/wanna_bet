import { Router } from "express";
import { postParticipant } from "../controllers/participants-controller";
import { validateSchema } from "../middlewares/validateSchema-middleware";
import { postParticipantSchema } from "../schemas/participant-schema";

const participantsRouter = Router();

participantsRouter.post("/", validateSchema(postParticipantSchema), postParticipant);

export { participantsRouter };
