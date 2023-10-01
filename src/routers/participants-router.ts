import { Router } from "express";
import { getParticipants, postParticipant } from "../controllers/participants-controller";
import { validateSchema } from "../middlewares/validate-schema-middleware";
import { postParticipantSchema } from "../schemas/participant-schema";

const participantsRouter = Router();

participantsRouter
    .post("/", validateSchema(postParticipantSchema), postParticipant)
    .get("/", getParticipants);


export { participantsRouter };
