import { postGameParams } from "../protocols";
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

const gameService = {
    postGame,
    getGames,
    getGameBets,
}

export default gameService;