import { moviesService } from '@/services/index-services';
import { moviesProtocol } from '@/protocols/index-protocols';
import { Request, Response } from 'express';
import httpStatus from 'http-status';


export async function read(_req: Request, res: Response): Promise<void> {
  const movies = await moviesService.read();
  res.status(httpStatus.OK).send(movies);
}

export async function create(req: Request, res: Response): Promise<void> {
  const movie = req.body as moviesProtocol.MovieData;

  await moviesService.create(movie); 
  res.sendStatus(httpStatus.CREATED);
}

export async function update(req: Request, res: Response): Promise<void> {
  const movie = req.body as moviesProtocol.MovieData;
  const id = req.params.id as string;

  await moviesService.update(movie, id); 
  res.sendStatus(httpStatus.ACCEPTED);
}

export async function deleteById(req: Request, res: Response): Promise<void> {
  const id = req.params.id as string;

  await moviesService.deleteById(id);
  res.sendStatus(httpStatus.NO_CONTENT); 
}
