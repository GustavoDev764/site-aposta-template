/**
 * Actions Types
 */

export enum UserTypes {
  SET_ID = "@USER_SET_ID",
  SET_NAME = "@USER_SET_NAME",
  SET_EMAIL = "@USER_SET_EMAIL",
  SET_TOKEN = "USER_SET_TOKEN",
}

/**
 * Data types
 */

export interface User {
  id: Number;
  name: String;
  email: String;
  token: String;
  islogged: Boolean;
}

export interface UserState {
  readonly Users: User;
}
