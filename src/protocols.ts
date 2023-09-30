import { Participant } from "@prisma/client";

export type postParticipantParams = Pick<Participant, "name" | "balance">;