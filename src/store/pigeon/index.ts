import { Reducer } from 'redux';
import { PigeonState, PigeonTypes, emptyPigeonPrice } from './types';

const INITIAL_STATE: PigeonState = {
  data: emptyPigeonPrice,
  error: false,
  loading: false
}

const reducer: Reducer<PigeonState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PigeonTypes.LOAD_REQUEST:
      return { ...state, loading: true, error: false };
    case PigeonTypes.LOAD_SUCCESS:
      return { 
        ...state,
        data: action.payload.data,
        loading: false,
        error: false
      };
    case PigeonTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: emptyPigeonPrice };
    default:
      return state;
  }
}

export default reducer;