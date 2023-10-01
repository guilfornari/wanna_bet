import { Request, Response } from "express";
import { AppError } from "../protocols";
import httpStatus from "http-status";

export function handleErrors(err: AppError, req: Request, res: Response) {
    if (err.name === "LowBalance") {
        return res.status(httpStatus.BAD_REQUEST).send({ message: err.message });
    }
}