import { postParticipantParams } from "../protocols";
import participantRepository from "../repositories/participants-repositories";

async function postParticipant(postParticipant: postParticipantParams) {
    const participant = await participantRepository.postParticipant(postParticipant);
    return participant;
}

async function getParticipants() {
    return await participantRepository.getParticipants();
}

const participantService = {
    postParticipant,
    getParticipants
}

export default participantService;