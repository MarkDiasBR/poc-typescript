import router from "@/routers/index-routers";
import logs from "@/logs/index-logs";
import errorHandler from "@/middlewares/errorHandler";
import express, { Request, Response, json } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(json());
app.use(cors());
app.use(router);
app.use(errorHandler);

const port: number = parseInt(process.env.PORT) || 5000;
app.listen(port, () => {  logs.apiConnection(port) });
