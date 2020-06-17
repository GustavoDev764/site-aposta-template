/**
 * Action types
 */

export enum ListSportTypes {
  SET_TYPE_SPORT_FUTEBOL = "@LT_SPORT_SET_TYPE_SPORT_FUTEBOL",
  SET_TYPE_SPORT_BASQUETE = "@LT_SPORT_SET_TYPE_SPORT_BASQUETE",
  SET_TYPE_SPORT_VOLEI = "@LT_SPORT_SET_TYPE_SPORT_VOLEI",
  SET_TYPE_SPORT_MMA = "@LT_SPORT_SET_TYPE_SPORT_MMA",
}

export enum SelectedSportTypes {
  FUTEBOL = "futebol",
  BASQUETE = "basquete",
  VOLEI = "volei",
  MMA = "mma",
}

/**
 * Data types
 */
export interface ListSport {
  sportfutebol: boolean;
  sportbasquete: boolean;
  sportvolei: boolean;
  sportmma: boolean;
  selectedsport: SelectedSportTypes;
}

/**
 * State
 */
export interface ListSportState {
  readonly ListSport: ListSport;
}
