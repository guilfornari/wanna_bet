import { Request, Response } from "express";
import httpStatus from "http-status";
import participantService from "../services/participants-service";

export async function postParticipant(req: Request, res: Response) {

    const { name, balance } = req.body;

    try {
        const participant = await participantService.postParticipant(name, balance)

        return res.status(httpStatus.OK).send(participant);
    } catch (error) {
        console.log(error);
    }
}