import { AppError } from "../protocols";

export function lowBalanceError(): AppError {
    return {
        name: "LowBalance",
        message: "You cannot bet more than your balance..."
    };
}