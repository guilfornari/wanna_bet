import { LowBalanceError } from "../errors/low-balance-error";
import { postBetParams } from "../protocols";
import betRepository from "../repositories/bets-repositories";
import participantRepository from "../repositories/participants-repositories";

async function postBet(postBet: postBetParams) {

    const { participantId, amountBet } = postBet;
    const { balance } = await participantRepository.getParticipantById(participantId);
    if (amountBet > balance) throw LowBalanceError();

    const bet = await betRepository.postBet(postBet);
    return bet;
}

const betService = {
    postBet,
}

export default betService;