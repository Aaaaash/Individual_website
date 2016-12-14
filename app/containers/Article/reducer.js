
import { fromJS, List } from 'immutable';

const initialState = fromJS({
  requesting: false,
  err: '',
});

function contentReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default contentReducer;
