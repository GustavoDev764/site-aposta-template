import { UserTypes } from "./types";

export const setId = (id: Number) => ({
  type: UserTypes.SET_ID,
  payload: id,
});

export const setName = (name: String) => ({
  type: UserTypes.SET_NAME,
  payload: name,
});

export const setEmail = (email: String) => ({
  type: UserTypes.SET_EMAIL,
  payload: email,
});

export const setToken = (token: String) => ({
  type: UserTypes.SET_TOKEN,
  payload: token,
});
