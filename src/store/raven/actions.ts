import { action } from 'typesafe-actions';
import { RavenTypes, RavenPrice } from './types';

export const loadRequest = () => action(RavenTypes.LOAD_REQUEST);

export const loadSuccess = (data: RavenPrice) => (
  action(RavenTypes.LOAD_SUCCESS, { data })
);

export const loadFailure = () => action(RavenTypes.LOAD_FAILURE);