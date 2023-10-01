import { AppError } from "../protocols";

export function gameFinishedError(): AppError {
    return {
        name: "GameFinished",
        message: "You cannot bet on a finished game"
    };
}
