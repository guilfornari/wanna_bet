import Joi from "joi";
import { finishGameParams, postGameParams } from "../protocols";

const postGameSchema = Joi.object<postGameParams>({
    homeTeamName: Joi.string().required(),
    awayTeamName: Joi.string().required(),
});

const finishGameSchema = Joi.object<finishGameParams>({
    homeTeamScore: Joi.number().required(),
    awayTeamScore: Joi.number().required()
});

export const gameSchema = {
    postGameSchema,
    finishGameSchema
};