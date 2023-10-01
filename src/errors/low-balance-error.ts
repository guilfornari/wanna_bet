import { AppError } from "../protocols";

export function LowBalanceError(): AppError {
    return {
        name: "LowBalance",
        message: "You cannot bet more than your balance..."
    };
}