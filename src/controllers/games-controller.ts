import { Request, Response } from "express";
import httpStatus from "http-status";
import gameService from "../services/games-service";
import { finishGameParams, postGameParams } from "../protocols";

export async function postGame(req: Request, res: Response) {
    const postGame: postGameParams = req.body;
    try {
        const game = await gameService.postGame(postGame);
        return res.status(httpStatus.CREATED).send(game);
    } catch (error) {
        console.log(error);
    }
}

export async function getGames(req: Request, res: Response) {
    try {
        const game = await gameService.getGames();
        return res.status(httpStatus.OK).send(game);
    } catch (error) {
        console.log(error);
    }
}

export async function getGameBets(req: Request, res: Response) {
    const { id } = req.params;
    const gameId = Number(id);
    try {
        const gameBets = await gameService.getGameBets(gameId);
        return res.status(httpStatus.OK).send(gameBets);
    } catch (error) {
        console.log(error);
    }
}

export async function finishGame(req: Request, res: Response) {
    const finishGame: finishGameParams = req.body;
    const { id } = req.params;
    const gameId = Number(id);
    try {
        const finishedGame = await gameService.finishGame(gameId, finishGame);
        return res.status(httpStatus.OK).send(finishedGame);
    } catch (error) {
        console.log(error);
    }
}