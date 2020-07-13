export enum PigeonTypes {
  LOAD_REQUEST = '@pigeon/LOAD_REQUEST',
  LOAD_SUCCESS = '@pigeon/LOAD_SUCCESS',
  LOAD_FAILURE = '@pigeon/LOAD_FAILURE',
};

export interface PigeonPrice {
  toBTC: number;
}

export interface PigeonState {
  readonly data: PigeonPrice;
  readonly loading: boolean;
  readonly error: boolean;
}

export const emptyPigeonPrice = {
  toBTC: 0.000000,
}