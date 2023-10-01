import { AppError } from "../protocols";

export function gameFinishedError(): AppError {
    return {
        name: "GameFinished",
        message: "This game is already finished..."
    };
}
