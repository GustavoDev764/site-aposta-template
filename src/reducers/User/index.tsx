import { Reducer } from "redux";
import { UserState, UserTypes } from "./types";

const INITIAL_STATE: UserState = {
  Users: {
    id: 0,
    name: "",
    email: "",
    token: "",
    islogged: false,
  },
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  let { Users } = state;
  switch (action.type) {
    case UserTypes.SET_ID:
      Users = { ...Users, id: action.payload };
      return { ...state, Users };

    case UserTypes.SET_NAME:
      Users = { ...Users, name: action.payload };
      return { ...state, Users };

    case UserTypes.SET_EMAIL:
      Users = { ...Users, email: action.payload };
      return { ...state, Users };

    case UserTypes.SET_TOKEN:
      Users = { ...Users, token: action.payload };
      return { ...state, Users };

    default:
      return state;
  }
};

export default reducer;
