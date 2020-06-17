import { LtJogosTypes } from "./types";

export const setTipoDeJogos = (event: React.FormEvent<HTMLSelectElement>) => ({
  type: LtJogosTypes.SET_TYPE_JOGO,
  payload: event.currentTarget.value,
});

export const setNameJogos = (event: React.FormEvent<HTMLInputElement>) => ({
  type: LtJogosTypes.SET_NAME_JOGO,
  payload: event.currentTarget.value,
});

export const setDateInicio = (date: Date) => ({
  type: LtJogosTypes.SET_DATE_INICIO_JOGO,
  payload: date,
});

export const setDateFim = (date: Date) => ({
  type: LtJogosTypes.SET_DATE_FIM_JOGO,
  payload: date,
});

export const setTodoOsJogos = () => ({
  type: LtJogosTypes.SET_LT_TODOS_JOGOS,
});

export const setFavoritoJogos = () => ({
  type: LtJogosTypes.SET_LT_FAVORITO_JOGOS,
});

export const setPendenteJogos = () => ({
  type: LtJogosTypes.SET_LT_PENDENTE_JOGOS,
});
