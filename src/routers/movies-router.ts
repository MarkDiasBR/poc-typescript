import { moviesController } from "@/controllers/index-controllers";
import { Router } from "express";

const moviesRouter = Router();

moviesRouter.get('/movies', moviesController.read);

export default moviesRouter;
