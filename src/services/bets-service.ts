import { postBetParams } from "../protocols";
import betRepository from "../repositories/bets-repositories";

async function postBet(postBet: postBetParams) {
    const bet = await betRepository.postBet(postBet);

    return bet;
}

const betService = {
    postBet,
}

export default betService;