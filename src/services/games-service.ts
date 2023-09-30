import { postGameParams } from "../protocols";
import gameRepository from "../repositories/games-repositories";

async function postGame(postGame: postGameParams) {
    const game = await gameRepository.postGame(postGame);

    return game;
}

const gameService = {
    postGame,
}

export default gameService;