import { Request, Response } from "express";
import httpStatus from "http-status";
import betService from "../services/bets-service";
import { postBetParams } from "../protocols";

export async function postBet(req: Request, res: Response) {

    const postBet: postBetParams = req.body;

    try {
        const bet = await betService.postBet(postBet);

        return res.status(httpStatus.OK).send(bet);
    } catch (error) {
        console.log(error);
    }
}