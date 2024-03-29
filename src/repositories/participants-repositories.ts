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

async function getParticipantById(participantId: number) {
    return prisma.participant.findUnique({
        where: { id: participantId }
    });
}

async function upDateParticipantsBalance(participantId: number, newBalance: number) {
    return prisma.participant.update({
        where: { id: participantId },
        data: {
            balance: newBalance
        }
    });
}

const participantRepository = {
    postParticipant,
    getParticipants,
    getParticipantById,
    upDateParticipantsBalance
}

export default participantRepository;