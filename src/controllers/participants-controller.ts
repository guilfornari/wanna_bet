import { Request, Response } from "express";
import httpStatus from "http-status";
import participantService from "../services/participants-service";
import { postParticipantParams } from "../protocols";

export async function postParticipant(req: Request, res: Response) {
    const postParticipant: postParticipantParams = req.body;
    try {
        const participant = await participantService.postParticipant(postParticipant);
        return res.status(httpStatus.CREATED).send(participant);
    } catch (error) {
        console.log(error);
    }
}

export async function getParticipants(req: Request, res: Response) {
    try {
        const participants = await participantService.getParticipants();
        return res.status(httpStatus.OK).send(participants);
    } catch (error) {
        console.log(error);
    }
}