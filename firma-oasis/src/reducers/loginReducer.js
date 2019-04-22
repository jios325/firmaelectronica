import * as types from '../actions';

export default function (state = [], action) {
  const response = action.payload;
  // console.log(action)
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return { ...state, response };
    case types.LOGIN_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
};