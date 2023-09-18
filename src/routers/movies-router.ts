import { moviesController } from "@/controllers/index-controllers";
import schemaValidation from "@/middlewares/schemaValidation";
import { moviesSchema } from "@/schemas/index-schemas";
import { Router } from "express";
import "express-async-errors";

const moviesRouter = Router();

moviesRouter.get('/movies', moviesController.read);
moviesRouter.post('/movies', schemaValidation(moviesSchema.movie), moviesController.create);
moviesRouter.put('/movies/:id', schemaValidation(moviesSchema.movie), moviesController.update);
moviesRouter.delete('/movies/:id', moviesController.deleteById)

export default moviesRouter;
