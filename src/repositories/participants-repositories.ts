import prisma from "../database";
import { postParticipantParams } from "../protocols";

async function postParticipant(postParticipant: postParticipantParams) {
    return prisma.participant.create({
        data: postParticipant
    });
}

async function getParticipants() {
    return prisma.participant.findMany();
}


const participantRepository = {
    postParticipant,
    getParticipants,
}

export default participantRepository;