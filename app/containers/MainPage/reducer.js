import {
  SET_AUTH_INFO,
} from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
  authInfo: {
    id: '',
    name: '',
    email: '',
    avatar: '',
    vio: '',
    gender: '',
  },
});

function indexReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH_INFO:
      return state.mergeDeep(fromJS({ authInfo: action.data }));
    default:
      return state;
  }
}

export default indexReducer;
