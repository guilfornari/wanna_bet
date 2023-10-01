import { Bet, Game, Participant } from "@prisma/client";

export type postParticipantParams = Pick<Participant, "name" | "balance">;
export type postGameParams = Pick<Game, "homeTeamName" | "awayTeamName">;
export type postBetParams = Pick<Bet, "homeTeamScore" | "awayTeamScore" | "amountBet" | "gameId" | "participantId">;
