import { Reducer } from "redux";

import { LtApostaTypes, LtApostaState, SelectedBilheteType } from "./types";

const INITIAL_STATE: LtApostaState = {
  LtAposta: {
    datainicio: new Date(),
    datatermino: new Date(),
    buscaaposta: "",
    typeaposta: "",
    bilheteativo: true,
    bilheteexcluido: false,
    selectedbilhete: SelectedBilheteType.ativo,
  },
};

const reduce: Reducer<LtApostaState> = (state = INITIAL_STATE, action) => {
  let { LtAposta } = state;
  switch (action.type) {
    case LtApostaTypes.SET_DATE_INICIO_LT_APOSTA:
      LtAposta = { ...LtAposta, datainicio: action.payload };
      return { ...state, LtAposta };

    case LtApostaTypes.SET_DATE_FIM_LT_APOSTA:
      LtAposta = { ...LtAposta, datatermino: action.payload };
      return { ...state, LtAposta };

    case LtApostaTypes.SET_BUSCA_LT_APOSTA:
      LtAposta = { ...LtAposta, buscaaposta: action.payload };
      return { ...state, LtAposta };

    case LtApostaTypes.SET_TYPE_APOSTA:
      LtAposta = { ...LtAposta, typeaposta: action.payload };
      return { ...state, LtAposta };

    case LtApostaTypes.SET_TYPE_BILHETE_ATIVOS:
      LtAposta = {
        ...LtAposta,
        bilheteativo: true,
        bilheteexcluido: false,
        selectedbilhete: SelectedBilheteType.ativo,
      };
      return { ...state, LtAposta };

    case LtApostaTypes.SET_TYPE_BILHETE_EXCLUIDO:
      LtAposta = {
        ...LtAposta,
        bilheteativo: false,
        bilheteexcluido: true,
        selectedbilhete: SelectedBilheteType.excluido,
      };
      return { ...state, LtAposta };

    default:
      return state;
  }
};

export default reduce;
