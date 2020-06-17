import { Reducer } from "redux";
import { ListSportTypes, ListSportState, SelectedSportTypes } from "./types";

const INITIAL_STATE: ListSportState = {
  ListSport: {
    sportfutebol: true,
    sportbasquete: false,
    sportvolei: false,
    sportmma: false,
    selectedsport: SelectedSportTypes.FUTEBOL,
  },
};

const reducer: Reducer<ListSportState> = (state = INITIAL_STATE, action) => {
  let { ListSport } = state;
  switch (action.type) {
    case ListSportTypes.SET_TYPE_SPORT_FUTEBOL:
      ListSport = {
        ...ListSport,
        sportfutebol: true,
        sportbasquete: false,
        sportvolei: false,
        sportmma: false,
        selectedsport: SelectedSportTypes.FUTEBOL,
      };
      return { ...state, ListSport };

    case ListSportTypes.SET_TYPE_SPORT_BASQUETE:
      ListSport = {
        ...ListSport,
        sportfutebol: false,
        sportbasquete: true,
        sportvolei: false,
        sportmma: false,
        selectedsport: SelectedSportTypes.BASQUETE,
      };
      return { ...state, ListSport };

    case ListSportTypes.SET_TYPE_SPORT_VOLEI:
      ListSport = {
        ...ListSport,
        sportfutebol: false,
        sportbasquete: false,
        sportvolei: true,
        sportmma: false,
        selectedsport: SelectedSportTypes.VOLEI,
      };
      return { ...state, ListSport };

    case ListSportTypes.SET_TYPE_SPORT_MMA:
      ListSport = {
        ...ListSport,
        sportfutebol: false,
        sportbasquete: false,
        sportvolei: false,
        sportmma: true,
        selectedsport: SelectedSportTypes.MMA,
      };
      return { ...state, ListSport };

    default:
      return state;
  }
};

export default reducer;
