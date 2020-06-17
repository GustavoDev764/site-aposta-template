/**
 * Actions Types
 */

export enum LtJogosTypes {
  SET_TYPE_JOGO = "@LT_JOGOS_SET_TYPE_JOGO",
  SET_NAME_JOGO = "@LT_SET_NAME_JOGO",
  SET_DATE_INICIO_JOGO = "@LT_SET_DATE_INICIO_JOGO",
  SET_DATE_FIM_JOGO = "@LT_SET_DATE_FIM_JOGO",
  SET_LT_TODOS_JOGOS = "@LT_SET_LT_TODOS_JOGOS",
  SET_LT_FAVORITO_JOGOS = "@LT_SET_LT_FAVORITO_JOGOS",
  SET_LT_PENDENTE_JOGOS = "@LT_SET_LT_PENDENTE_JOGOS",
}

export enum SelectedTableTypes {
  TODOS_OS_JOGOS = "Todo os Jogos",
  FAVORITO_JOGOS = "Favorito Jogos",
  PENDENTE_JOGOS = "Pendente Jogos",
}

/**
 * Data types
 */
export interface LtJogos {
  tipodejogos: String;
  buscajogos: String;
  datainicio: Date;
  datatermino: Date;
  tabletodososjogos: boolean;
  tablejogosfavoritos: boolean;
  tablejogospendentes: boolean;
  selectedtable: SelectedTableTypes;
}

export interface LtJogosState {
  readonly LtJogos: LtJogos;
}
