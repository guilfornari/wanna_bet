import { Request, Response } from "express";
import httpStatus from "http-status";
import gameService from "../services/games-service";
import { postGameParams } from "../protocols";

export async function postGame(req: Request, res: Response) {

    const postGame: postGameParams = req.body;

    try {
        const game = await gameService.postGame(postGame);

        return res.status(httpStatus.OK).send(game);
    } catch (error) {
        console.log(error);
    }
}