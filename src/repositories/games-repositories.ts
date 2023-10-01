import prisma from "../database";
import { postGameParams } from "../protocols";

async function postGame(postGame: postGameParams) {
    return prisma.game.create({
        data: postGame
    });
}

async function getGames() {
    return prisma.game.findMany();
}

const gameRepository = {
    postGame,
    getGames
}

export default gameRepository;