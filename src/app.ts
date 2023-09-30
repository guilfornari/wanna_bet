import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Request, Response } from "express";

dotenv.config();

const app = express();
app
    .use(cors())
    .use(express.json())
    .get("/health", (req: Request, res: Response) => res.send("Server is alive and well!"));

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`Running server on port ${PORT}`));