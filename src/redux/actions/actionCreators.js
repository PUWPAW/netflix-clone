import { EMAIL, LOGIN, LOGOUT } from "./actionTypes";

//ACTION CREATORS
export const loginAction = (user) => ({
  type: LOGIN,
  payload: user,
});

export const logoutAction = () => ({
  type: LOGOUT,
});

export const registrationAtction = (email) => ({
  type: EMAIL,
  payload: email,
});
