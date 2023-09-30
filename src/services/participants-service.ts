import participantRepository from "../repositories/participants-repositories";

async function postParticipant(name: string, balance: number) {
    const participant = await participantRepository.postParticipant(name, balance);

    return participant;
}

const participantService = {
    postParticipant,
}

export default participantService;