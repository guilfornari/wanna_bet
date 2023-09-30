import prisma from "../database";

async function postParticipant(name: string, balance: number) {
    return prisma.participant.create({
        data: {
            name,
            balance
        }
    });
};

const participantRepository = {
    postParticipant
};

export default participantRepository;