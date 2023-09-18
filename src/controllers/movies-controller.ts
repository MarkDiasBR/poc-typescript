import { Request, Response } from 'express';
import { moviesService } from '@/services/index-services';
import httpStatus from 'http-status';

export async function read(_req: Request, res: Response): Promise<void> {
  try {
    const movies = await moviesService.read();
    res.status(httpStatus.OK).send(movies);
  } catch (error) {
    res.status(httpStatus.NOT_FOUND).send({});
  }
}
