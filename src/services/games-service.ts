import { gameFinishedError } from "../errors/game-finished-error";
import { finishGameParams, postGameParams } from "../protocols";
import betRepository from "../repositories/bets-repositories";
import gameRepository from "../repositories/games-repositories";
import participantRepository from "../repositories/participants-repositories";

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
    //if (isFinished === true) throw gameFinishedError();

    const finishedGame = await gameRepository.finishGame(gameId, finishGame);

    await betRepository.updateGameBetsWon(gameId, finishGame);

    const wonBets = await betRepository.getWonBets();
    const { _sum: { amountBet: amountWonBets } } = await betRepository.sumBetsWonGame(gameId);
    const { _sum: { amountBet: amountAllBets } } = await betRepository.sumAllBetsGame(gameId);

    const houseTax = 0.3;

    for (let i = 0; i < wonBets.length; i++) {
        const betId = wonBets[i].id;
        const bet = wonBets[i].amountBet;
        const prize = ((bet / amountWonBets) * (amountAllBets)) * (1 - houseTax);

        await betRepository.setBetsAmountWon(betId, prize);
        const { balance } = await participantRepository.getParticipantById(wonBets[i].participantId);
        const newBalance = balance + prize;
        await participantRepository.upDateParticipantsBalance(wonBets[i].participantId, newBalance);
    };

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