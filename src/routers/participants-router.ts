import { Router } from "express";
import { getParticipants, postParticipant } from "../controllers/participants-controller";
import { validateSchema } from "../middlewares/validateSchema-middleware";
import { postParticipantSchema } from "../schemas/participant-schema";

const participantsRouter = Router();

participantsRouter
    .post("/", validateSchema(postParticipantSchema), postParticipant)
    .get("/", getParticipants);


export { participantsRouter };
