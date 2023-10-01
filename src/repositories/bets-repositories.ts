import prisma from "../database";
import { postBetParams } from "../protocols";

async function postBet(postBet: postBetParams) {
    return prisma.bet.create({
        data: postBet
    });
};

const betRepository = {
    postBet
};

export default betRepository;