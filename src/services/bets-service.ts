import { gameFinishedError } from "../errors/game-finished-error";
import { lowBalanceError } from "../errors/low-balance-error";
import { postBetParams } from "../protocols";
import betRepository from "../repositories/bets-repositories";
import gameRepository from "../repositories/games-repositories";
import participantRepository from "../repositories/participants-repositories";

async function postBet(postBet: postBetParams) {

    const { participantId, amountBet, gameId } = postBet;
    const { balance } = await participantRepository.getParticipantById(participantId);
    if (amountBet > balance) throw lowBalanceError();

    const { isFinished } = await gameRepository.getGameById(gameId);
    if (isFinished === true) throw gameFinishedError();

    const bet = await betRepository.postBet(postBet);

    const newBalance = balance - amountBet;
    await participantRepository.upDateParticipantsBalance(participantId, newBalance);

    return bet;
}

const betService = {
    postBet,
}

export default betService;