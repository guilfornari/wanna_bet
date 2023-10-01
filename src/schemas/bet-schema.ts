import Joi from "joi";
import { postBetParams } from "../protocols";

export const postBetSchema = Joi.object<postBetParams>({
    homeTeamScore: Joi.number().required(),
    awayTeamScore: Joi.number().required(),
    amountBet: Joi.number().required(),
    gameId: Joi.number().required(),
    participantId: Joi.number().required()
});