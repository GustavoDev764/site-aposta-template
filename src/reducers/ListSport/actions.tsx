import { ListSportTypes } from "./types";

export const selectedFutebol = () => ({
  type: ListSportTypes.SET_TYPE_SPORT_FUTEBOL,
});
export const selectedBasquete = () => ({
  type: ListSportTypes.SET_TYPE_SPORT_BASQUETE,
});
export const selectedVolei = () => ({
  type: ListSportTypes.SET_TYPE_SPORT_VOLEI,
});
export const selectedMMA = () => ({
  type: ListSportTypes.SET_TYPE_SPORT_MMA,
});
