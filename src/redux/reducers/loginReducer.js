import { EMAIL, LOGIN, LOGOUT } from "../actions/actionTypes";

const defaultState = {
  login: null,
  email: "",
};

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        login: action.payload,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        login: null,
      };
    }
    case EMAIL: {
      return {
        ...state,
        email: action.payload,
      };
    }
    default:
      return state;
  }
};
