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

async function getGameBets(gameId: number) {
    return prisma.game.findUnique({
        where: {
            id: gameId
        },
        include: { Bet: true }
    });
}

async function getGameById(gameId: number) {
    return prisma.game.findUnique({
        where: {
            id: gameId
        }
    });
}

const gameRepository = {
    postGame,
    getGames,
    getGameBets,
    getGameById
}

export default gameRepository;