import { LtApostaTypes } from "./types";

export const setDataInicio = (date: Date) => ({
  type: LtApostaTypes.SET_DATE_INICIO_LT_APOSTA,
  payload: date,
});

export const setDataFim = (date: Date) => ({
  type: LtApostaTypes.SET_DATE_FIM_LT_APOSTA,
  payload: date,
});

export const setBuscaAposta = (event: React.FormEvent<HTMLInputElement>) => ({
  type: LtApostaTypes.SET_BUSCA_LT_APOSTA,
  payload: event.currentTarget.value,
});

export const setTypeAposta = (event: React.FormEvent<HTMLSelectElement>) => ({
  type: LtApostaTypes.SET_TYPE_APOSTA,
  payload: event.currentTarget.value,
});

export const setBilheteAtivo = () => ({
  type: LtApostaTypes.SET_TYPE_BILHETE_ATIVOS,
});

export const setBilheteExcluido = () => ({
  type: LtApostaTypes.SET_TYPE_BILHETE_EXCLUIDO,
});
