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
            status: "LOST",
            amountWon: 0
        }
    });
}

async function getWonBets() {
    return prisma.bet.findMany({
        where: { status: "WON" }
    });
}

async function setBetsAmountWon(betId: number, prize: number) {
    return prisma.bet.update({
        where: { id: betId },
        data: { amountWon: prize }
    });
}

async function sumBetsWonGame(gameId: number) {
    return prisma.bet.aggregate({
        where: {
            AND: [{
                gameId,
                status: "WON"
            }]
        },
        _sum: {
            amountBet: true
        }
    });
}

async function sumAllBetsGame(gameId: number) {
    return prisma.bet.aggregate({
        where: {
            gameId,
        },
        _sum: {
            amountBet: true
        }
    });
}


const betRepository = {
    postBet,
    updateGameBetsWon,
    updateGameBetsLost,
    getWonBets,
    setBetsAmountWon,
    sumBetsWonGame,
    sumAllBetsGame,
}

export default betRepository;