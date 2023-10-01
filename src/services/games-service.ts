import { gameFinishedError } from "../errors/game-finished-error";
import { finishGameParams, postGameParams } from "../protocols";
import betRepository from "../repositories/bets-repositories";
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

    const finishedGame = await gameRepository.finishGame(gameId, finishGame);

    await betRepository.updateGameBetsWon(gameId, finishGame);
    await betRepository.updateGameBetsLost(gameId, finishGame);

    return finishedGame;
}

const gameService = {
    postGame,
    getGames,
    getGameBets,
    finishGame
}

export default gameService;