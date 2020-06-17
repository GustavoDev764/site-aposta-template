/**
 * Action Types
 */

export enum LtApostaTypes {
  SET_DATE_INICIO_LT_APOSTA = "@LT_APOSTA_SET_DATE_INICIO_LT_APOSTA",
  SET_DATE_FIM_LT_APOSTA = "@LT_APOSTA_SET_DATE_FIM_LT_APOSTA",

  SET_BUSCA_LT_APOSTA = "@LT_APOSTA_SET_BUSCA_LT_APOSTA",

  SET_TYPE_APOSTA = "@LT_APOSTA_SET_TYPE_APOSTA",

  SET_TYPE_BILHETE_ATIVOS = "@LT_APOSTA_SET_TYPE_BILHETE_ATIVOS",
  SET_TYPE_BILHETE_EXCLUIDO = "@LT_APOSTA_SET_TYPE_BILHETE_EXCLUIDO",
}

export enum SelectedBilheteType {
  excluido = "excluido",
  ativo = "ativo",
}

/**
 * Data types
 */

export interface LtAposta {
  datainicio: Date;
  datatermino: Date;
  buscaaposta: String;
  typeaposta: String;
  bilheteativo: boolean;
  bilheteexcluido: boolean;
  selectedbilhete: SelectedBilheteType;
}

/**
 * State Type
 */

export interface LtApostaState {
  readonly LtAposta: LtAposta;
}
