import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(cors())
app.use(express.json());

dotenv.config();

app.get("/health", (req, res) => {
    res.send("Server is alive and well!");
});

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`Running server on port ${PORT}`));