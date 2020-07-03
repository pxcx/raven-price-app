import { Reducer } from 'redux';
import { RavenState, RavenTypes, emptyRavenPrice} from './types';

const INITIAL_STATE: RavenState = {
  data: emptyRavenPrice,
  error: false,
  loading: false
}

const reducer: Reducer<RavenState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RavenTypes.LOAD_REQUEST:
      return { ...state, loading: true, error: false };
    case RavenTypes.LOAD_SUCCESS:
      return { 
        ...state,
        data: action.payload.data,
        loading: false,
        error: false
      };
    case RavenTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: emptyRavenPrice };
    default:
      return state;
  }
}

export default reducer;