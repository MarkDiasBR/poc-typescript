import { Request, Response, Router } from "express";

const healthRouter = Router();

healthRouter.get('/health', (req: Request, res: Response) => res.send("I'm alive!"));

export default healthRouter;
