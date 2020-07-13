export enum RavenTypes {
  LOAD_REQUEST = '@raven/LOAD_REQUEST',
  LOAD_SUCCESS = '@raven/LOAD_SUCCESS',
  LOAD_FAILURE = '@raven/LOAD_FAILURE',
};

export interface RavenPrice {
  toBTC: number;
}

export interface RavenState {
  readonly data: RavenPrice;
  readonly loading: boolean;
  readonly error: boolean;
}

export const emptyRavenPrice = {
  toBTC: 0.000000,
}