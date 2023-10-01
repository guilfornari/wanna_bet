import Joi from "joi";
import { postParticipantParams } from "../protocols";

export const postParticipantSchema = Joi.object<postParticipantParams>({
    name: Joi.string().required(),
    balance: Joi.number().min(1000).required(),
});