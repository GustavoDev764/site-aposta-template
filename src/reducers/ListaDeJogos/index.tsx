import { Reducer } from "redux";
import { LtJogosState, LtJogosTypes, SelectedTableTypes } from "./types";

const INITIAL_STATE: LtJogosState = {
  LtJogos: {
    tipodejogos: "todos-os-jogos",
    buscajogos: "",
    datainicio: new Date(),
    datatermino: new Date(),
    tabletodososjogos: true,
    tablejogosfavoritos: false,
    tablejogospendentes: false,
    selectedtable: SelectedTableTypes.TODOS_OS_JOGOS,
  },
};

const reducer: Reducer<LtJogosState> = (state = INITIAL_STATE, action) => {
  let { LtJogos } = state;
  switch (action.type) {
    case LtJogosTypes.SET_LT_TODOS_JOGOS:
      LtJogos = {
        ...LtJogos,
        tabletodososjogos: true,
        tablejogosfavoritos: false,
        tablejogospendentes: false,
        selectedtable: SelectedTableTypes.TODOS_OS_JOGOS,
      };
      return { ...state, LtJogos };

    case LtJogosTypes.SET_LT_FAVORITO_JOGOS:
      LtJogos = {
        ...LtJogos,
        tabletodososjogos: false,
        tablejogosfavoritos: true,
        tablejogospendentes: false,
        selectedtable: SelectedTableTypes.FAVORITO_JOGOS,
      };
      return { ...state, LtJogos };

    case LtJogosTypes.SET_LT_PENDENTE_JOGOS:
      LtJogos = {
        ...LtJogos,
        tabletodososjogos: false,
        tablejogosfavoritos: false,
        tablejogospendentes: true,
        selectedtable: SelectedTableTypes.PENDENTE_JOGOS,
      };
      return { ...state, LtJogos };

    case LtJogosTypes.SET_TYPE_JOGO:
      LtJogos = { ...LtJogos, tipodejogos: action.payload };
      return { ...state, LtJogos };

    case LtJogosTypes.SET_NAME_JOGO:
      LtJogos = { ...LtJogos, buscajogos: action.payload };
      return { ...state, LtJogos };

    case LtJogosTypes.SET_DATE_INICIO_JOGO:
      LtJogos = { ...LtJogos, datainicio: action.payload };
      return { ...state, LtJogos };

    case LtJogosTypes.SET_DATE_FIM_JOGO:
      LtJogos = { ...LtJogos, datatermino: action.payload };
      return { ...state, LtJogos };

    default:
      return state;
  }
};

export default reducer;
