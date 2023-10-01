import { gameFinishedError } from "../errors/game-finished-error";
import { finishGameParams, postGameParams } from "../protocols";
import gameRepository from "../repositories/games-repositories";

async function postGame(postGame: postGameParams) {
    const game = await gameRepository.postGame(postGame);
    return game;
}

async function getGames() {
    return await gameRepository.getGames();
}

async function getGameBets(gameId: number) {
    return await gameRepository.getGameBets(gameId);
}

async function finishGame(gameId: number, finishGame: finishGameParams) {

    const { isFinished } = await gameRepository.getGameById(gameId);
    if (isFinished === true) throw gameFinishedError();

    return await gameRepository.finishGame(gameId, finishGame);
}

const gameService = {
    postGame,
    getGames,
    getGameBets,
    finishGame
}

export default gameService;