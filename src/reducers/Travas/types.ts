/**
 * Actions Types
 */

export enum TravasTypes {
  SET_NAME = "@TRAVAS_SET_NAME",
  SET_LOGIN = "@TRAVAS_SET_LOGIN",
  SET_SENHA = "@TRAVAS_SET_SENHA",
  SET_PR_MAXIMA = "@TRAVAS_SET_PR_MAXIMA",
  SET_MULTIPLICADO = "@TRAVAS_SET_MULTIPLICADO",
  SET_TRAVA_MULTIPLICADO = "@TRAVAS_SET_TRAVA_MULTIPLICADO",
  SET_N_MININO_JOGOS = "@TRAVAS_SET_N_MININO_JOGOS",
  SET_N_MAXIMA_JOGOS = "@TRAVAS_SET_N_MAXIMA_JOGOS",
  SET_VALOR_MINIMO = "@TRAVAS_SET_VALOR_MINIMO",
  SET_VALOR_MAXIMO = "@TRAVAS_SET_VALOR_MAXIMO",
  SET_ODD_MINIMA = "@TRAVAS_SET_ODD_MINIMA",
  SET_ODD_MAXIMA = "@TRAVAS_SET_ODD_MAXIMA",
  SET_LIMITE_CONFRONTOS = "@TRAVAS_SET_LIMITE_CONFRONTOS",
  SET_TEMPO_CANCELA_BILHETE = "@TRAVAS_SET_TEMPO_CANCELA_BILHETE",
  SET_APOSTA_DE_RISCO = "@TRAVAS_SET_APOSTA_DE_RISCO",
  SET_DELAY_AO_VIVO = "@TRAVAS_SET_DELAY_AO_VIVO",
  SET_TEMPO_AO_VIVO = "@TRAVAS_SET_TEMPO_AO_VIVO",
  SET_CLIENTE_AO_VIVO = "@TRAVAS_SET_CLIENTE_AO_VIVO",
  SET_ACEITA_CENTAVOS = "@TRAVAS_SET_ACEITA_CENTAVOS",
  SET_DATA_TRAVA = "@TRAVAS_SET_DATA_TRAVA",
  SET_QR_CODE = "@TRAVAS_SET_QR_CODE",
  SET_AO_VIVO = "@TRAVAS_SET_AO_VIVO",
  SET_CREDITOS = "@TRAVAS_SET_CREDITOS",
  SET_QTD_DE_VENDEDOR = "@TRAVAS_SET_QTD_DE_VENDEDOR",
  SET_TIPO_CAIXA = "@TRAVAS_SET_TIPO_CAIXA",
  SET_VALOR_APOSTADO_INICIAL = "@TRAVAS_SET_VALOR_APOSTADO_INICIAL",
  SET_OUTROS_ESPORTES = "@TRAVAS_SET_OUTROS_ESPORTES",
  SET_MENSAGEM_BILHETE = "@TRAVAS_SET_MENSAGEM_BILHETE",
  SET_REGULAMENTO = "@TRAVAS_SET_REGULAMENTO",
}

/**
 * Data types
 */

export enum CaixaType {
  SIMPLES = "Simples",
  COMPLETO = "Completo",
}

export enum YesOrNo {
  SIM = "Sim",
  NAO = "Não",
}

export interface Travas {
  name: String;
  login: String;
  senha: String;
  prmaxima: Number;
  multiplicado: Number;
  travamultiplicado: YesOrNo;
  nminimojogos: Number;
  nmaximojogos: Number;
  vlminino: Number;
  vlmaximo: Number;
  oddminima: Number;
  oddmaxima: Number;
  limiteconfrontos: Number;
  tempocancelabilhete: Number;
  apostarisco: Number;
  delayaovivo: Number;
  tempoaovivo: Number;
  clienteaovivo: YesOrNo;
  aceitacentavos: YesOrNo;
  datatrava: String;
  qrcode: YesOrNo;
  aovivo: YesOrNo;
  creditos: YesOrNo;
  qtdvendedo: Number;
  tipocaixa: CaixaType;
  vlapostadoinicial: Number;
  outrosesportes: YesOrNo;
  msgbilhete: String;
  regulamento: String;
}

export interface TravasState {
  readonly Travas: Travas;
}
