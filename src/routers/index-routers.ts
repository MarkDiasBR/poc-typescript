import { Router } from "express";
import moviesRouter from "@/routers/movies-router";
import healthRouter from "@/routers/health-router";

const router = Router();

router.use(healthRouter);
router.use(moviesRouter);

export default router;
