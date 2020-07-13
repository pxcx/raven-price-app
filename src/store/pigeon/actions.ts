import { action } from 'typesafe-actions';
import { PigeonTypes, PigeonPrice } from './types';

export const loadRequest = () => action(PigeonTypes.LOAD_REQUEST);

export const loadSuccess = (data: PigeonPrice) => {
  return action(PigeonTypes.LOAD_SUCCESS, { data })
};

export const loadFailure = () => action(PigeonTypes.LOAD_FAILURE);