import betRepository from "../repositories/bets-repositories";
import participantRepository from "../repositories/participants-repositories";

export async function payBets(gameId: number) {

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
    }

}