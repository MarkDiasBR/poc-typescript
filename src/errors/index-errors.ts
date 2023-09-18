import { conflictingResource } from '@/errors/conflicting-resource';
import { incompleteData } from '@/errors/incomplete-data';
import { notFound } from '@/errors/not-found';
import { badRequest } from '@/errors/bad-request';
import { tooManyResults } from '@/errors/too-many-results';
import { invalidPageValue } from '@/errors/invalid-page-value';
import { dbFailure } from '@/errors/db-failure';
import { internalServerError } from '@/errors/internal-server-error';

const errors = {
  conflictingResource,
  incompleteData,
  notFound,
  badRequest,
  tooManyResults,
  invalidPageValue,
  dbFailure,
  internalServerError
};

export default errors;