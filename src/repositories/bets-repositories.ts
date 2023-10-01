import prisma from "../database";
import { finishGameParams, postBetParams } from "../protocols";

async function postBet(postBet: postBetParams) {
    return prisma.bet.create({
        data: postBet
    });
}

async function updateGameBetsWon(gameId: number, finishGame: finishGameParams) {

    return prisma.bet.updateMany({
        where: {
            gameId,
            homeTeamScore: finishGame.homeTeamScore,
            awayTeamScore: finishGame.awayTeamScore
        },
        data: {
            status: "WON"
        }
    });
}

async function updateGameBetsLost(gameId: number, finishGame: finishGameParams) {
    return prisma.bet.updateMany({
        where: {
            gameId,
            OR: [{
                homeTeamScore: {
                    not: finishGame.homeTeamScore
                }
            },
            {
                awayTeamScore: {
                    not: finishGame.awayTeamScore
                }
            }]
        },
        data: {
            status: "LOST"
        }
    });
}

const betRepository = {
    postBet,
    updateGameBetsWon,
    updateGameBetsLost,
}

export default betRepository;