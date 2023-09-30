import { Game, Participant } from "@prisma/client";

export type postParticipantParams = Pick<Participant, "name" | "balance">;
export type postGameParams = Pick<Game, "homeTeamName" | "awayTeamName">;
