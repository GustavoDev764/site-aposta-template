import { TravasTypes } from "./types";

export const setName = (event: React.FormEvent<HTMLInputElement>) => ({
  type: TravasTypes.SET_NAME,
  payload: event.currentTarget.value,
});

export const setLogin = (event: React.FormEvent<HTMLInputElement>) => ({
  type: TravasTypes.SET_LOGIN,
  payload: event.currentTarget.value,
});

export const setSenha = (event: React.FormEvent<HTMLInputElement>) => ({
  type: TravasTypes.SET_SENHA,
  payload: event.currentTarget.value,
});

export const setPrMaximo = (event: React.FormEvent<HTMLInputElement>) => ({
  type: TravasTypes.SET_PR_MAXIMA,
  payload: event.currentTarget.value,
});

export const setMultiplicado = (event: React.FormEvent<HTMLInputElement>) => ({
  type: TravasTypes.SET_MULTIPLICADO,
  payload: event.currentTarget.value,
});

export const setTravaMultiplicado = (
  event: React.FormEvent<HTMLSelectElement>
) => ({
  type: TravasTypes.SET_TRAVA_MULTIPLICADO,
  payload: event.currentTarget.value,
});

export const setNMinimoJogos = (event: React.FormEvent<HTMLInputElement>) => ({
  type: TravasTypes.SET_N_MININO_JOGOS,
  payload: event.currentTarget.value,
});

export const setNMaximoJogos = (event: React.FormEvent<HTMLInputElement>) => ({
  type: TravasTypes.SET_N_MAXIMA_JOGOS,
  payload: event.currentTarget.value,
});

export const setValorMinimo = (event: React.FormEvent<HTMLInputElement>) => ({
  type: TravasTypes.SET_VALOR_MINIMO,
  payload: event.currentTarget.value,
});

export const setValorMaximo = (event: React.FormEvent<HTMLInputElement>) => ({
  type: TravasTypes.SET_VALOR_MAXIMO,
  payload: event.currentTarget.value,
});

export const setOddMinima = (event: React.FormEvent<HTMLInputElement>) => ({
  type: TravasTypes.SET_ODD_MINIMA,
  payload: event.currentTarget.value,
});

export const setOddMaxima = (event: React.FormEvent<HTMLInputElement>) => ({
  type: TravasTypes.SET_ODD_MAXIMA,
  payload: event.currentTarget.value,
});

export const setLimiteConfrontos = (
  event: React.FormEvent<HTMLInputElement>
) => ({
  type: TravasTypes.SET_LIMITE_CONFRONTOS,
  payload: event.currentTarget.value,
});

export const setTempoCancelaBilhete = (
  event: React.FormEvent<HTMLInputElement>
) => ({
  type: TravasTypes.SET_TEMPO_CANCELA_BILHETE,
  payload: event.currentTarget.value,
});

export const setApostaRisco = (event: React.FormEvent<HTMLInputElement>) => ({
  type: TravasTypes.SET_APOSTA_DE_RISCO,
  payload: event.currentTarget.value,
});

export const setDelayAoVivo = (event: React.FormEvent<HTMLInputElement>) => ({
  type: TravasTypes.SET_DELAY_AO_VIVO,
  payload: event.currentTarget.value,
});

export const setTempoAoVivo = (event: React.FormEvent<HTMLInputElement>) => ({
  type: TravasTypes.SET_TEMPO_AO_VIVO,
  payload: event.currentTarget.value,
});

export const setClienteAoVivo = (
  event: React.FormEvent<HTMLSelectElement>
) => ({
  type: TravasTypes.SET_CLIENTE_AO_VIVO,
  payload: event.currentTarget.value,
});

export const setAceitaCentavos = (
  event: React.FormEvent<HTMLSelectElement>
) => ({
  type: TravasTypes.SET_ACEITA_CENTAVOS,
  payload: event.currentTarget.value,
});

export const setDataTrava = (event: React.FormEvent<HTMLInputElement>) => ({
  type: TravasTypes.SET_DATA_TRAVA,
  payload: event.currentTarget.value,
});

export const setQrCode = (event: React.FormEvent<HTMLSelectElement>) => ({
  type: TravasTypes.SET_QR_CODE,
  payload: event.currentTarget.value,
});

export const setAoVivo = (event: React.FormEvent<HTMLSelectElement>) => ({
  type: TravasTypes.SET_AO_VIVO,
  payload: event.currentTarget.value,
});

export const setCreditos = (event: React.FormEvent<HTMLSelectElement>) => ({
  type: TravasTypes.SET_CREDITOS,
  payload: event.currentTarget.value,
});

export const setQTDVendedor = (event: React.FormEvent<HTMLInputElement>) => ({
  type: TravasTypes.SET_QTD_DE_VENDEDOR,
  payload: event.currentTarget.value,
});

export const setTipoCaixa = (event: React.FormEvent<HTMLSelectElement>) => ({
  type: TravasTypes.SET_TIPO_CAIXA,
  payload: event.currentTarget.value,
});

export const setValorApostadoInicial = (
  event: React.FormEvent<HTMLInputElement>
) => ({
  type: TravasTypes.SET_VALOR_APOSTADO_INICIAL,
  payload: event.currentTarget.value,
});

export const setOutrosSports = (event: React.FormEvent<HTMLSelectElement>) => ({
  type: TravasTypes.SET_OUTROS_ESPORTES,
  payload: event.currentTarget.value,
});

export const setMensageBilhete = (
  event: React.FormEvent<HTMLInputElement>
) => ({
  type: TravasTypes.SET_MENSAGEM_BILHETE,
  payload: event.currentTarget.value,
});

export const setRegulamento = (str: String) => ({
  type: TravasTypes.SET_REGULAMENTO,
  payload: str,
});
