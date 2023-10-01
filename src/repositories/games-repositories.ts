import prisma from "../database";
import { finishGameParams, postGameParams } from "../protocols";

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

async function finishGame(gameId: number, finishGame: finishGameParams) {
    return prisma.game.update({
        where: { id: gameId },
        data: {
            ...finishGame,
            isFinished: true
        }
    });
}

const gameRepository = {
    postGame,
    getGames,
    getGameBets,
    getGameById,
    finishGame
}

export default gameRepository;