import Joi from "joi";
import { postGameParams } from "../protocols";

export const postGameSchema = Joi.object<postGameParams>({
    homeTeamName: Joi.string().required(),
    awayTeamName: Joi.string().required(),
});