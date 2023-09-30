import prisma from "../database";
import { postGameParams } from "../protocols";

async function postGame(postGame: postGameParams) {
    return prisma.game.create({
        data: postGame
    });
};

const gameRepository = {
    postGame
};

export default gameRepository;