import { Reducer } from "redux";
import { TravasTypes, TravasState, YesOrNo, CaixaType } from "./types";

const INITIAL_STATE: TravasState = {
  Travas: {
    name: "",
    login: "",
    senha: "",
    prmaxima: 0,
    multiplicado: 0,
    travamultiplicado: YesOrNo.NAO,
    nminimojogos: 0,
    nmaximojogos: 0,
    vlminino: 0,
    vlmaximo: 0,
    oddminima: 0,
    oddmaxima: 0,
    limiteconfrontos: 0,
    tempocancelabilhete: 0,
    apostarisco: 0,
    delayaovivo: 0,
    tempoaovivo: 0,
    clienteaovivo: YesOrNo.NAO,
    aceitacentavos: YesOrNo.NAO,
    datatrava: "" + DateNow(),
    qrcode: YesOrNo.NAO,
    aovivo: YesOrNo.NAO,
    creditos: YesOrNo.NAO,
    qtdvendedo: 0,
    tipocaixa: CaixaType.COMPLETO,
    vlapostadoinicial: 0,
    outrosesportes: YesOrNo.NAO,
    msgbilhete: "",
    regulamento: "",
  },
};

const reducer: Reducer<TravasState> = (state = INITIAL_STATE, action) => {
  let { Travas } = state;
  switch (action.type) {
    case TravasTypes.SET_NAME:
      Travas = { ...Travas, name: action.payload };
      return { ...state, Travas };

    case TravasTypes.SET_LOGIN:
      Travas = { ...Travas, login: action.payload };
      return { ...state, Travas };

    case TravasTypes.SET_SENHA:
      Travas = { ...Travas, senha: action.payload };
      return { ...state, Travas };

    case TravasTypes.SET_PR_MAXIMA:
      Travas = { ...Travas, prmaxima: action.payload };
      return { ...state, Travas };

    case TravasTypes.SET_MULTIPLICADO:
      Travas = { ...Travas, multiplicado: action.payload };
      return { ...state, Travas };

    case TravasTypes.SET_TRAVA_MULTIPLICADO:
      Travas = { ...Travas, travamultiplicado: action.payload };
      return { ...state, Travas };

    case TravasTypes.SET_N_MININO_JOGOS:
      Travas = { ...Travas, nminimojogos: action.payload };
      return { ...state, Travas };

    case TravasTypes.SET_N_MAXIMA_JOGOS:
      Travas = { ...Travas, nmaximojogos: action.payload };
      return { ...state, Travas };

    case TravasTypes.SET_VALOR_MINIMO:
      Travas = { ...Travas, vlminino: action.payload };
      return { ...state, Travas };

    case TravasTypes.SET_VALOR_MAXIMO:
      Travas = { ...Travas, vlmaximo: action.payload };
      return { ...state, Travas };

    case TravasTypes.SET_ODD_MINIMA:
      Travas = { ...Travas, oddminima: action.payload };
      return { ...state, Travas };

    case TravasTypes.SET_ODD_MAXIMA:
      Travas = { ...Travas, oddmaxima: action.payload };
      return { ...state, Travas };

    case TravasTypes.SET_LIMITE_CONFRONTOS:
      Travas = { ...Travas, limiteconfrontos: action.payload };
      return { ...state, Travas };

    case TravasTypes.SET_TEMPO_CANCELA_BILHETE:
      Travas = { ...Travas, tempocancelabilhete: action.payload };
      return { ...state, Travas };

    case TravasTypes.SET_APOSTA_DE_RISCO:
      Travas = { ...Travas, apostarisco: action.payload };
      return { ...state, Travas };

    case TravasTypes.SET_DELAY_AO_VIVO:
      Travas = { ...Travas, delayaovivo: action.payload };
      return { ...state, Travas };

    case TravasTypes.SET_TEMPO_AO_VIVO:
      Travas = { ...Travas, tempoaovivo: action.payload };
      return { ...state, Travas };

    case TravasTypes.SET_CLIENTE_AO_VIVO:
      Travas = { ...Travas, clienteaovivo: action.payload };
      return { ...state, Travas };

    case TravasTypes.SET_ACEITA_CENTAVOS:
      Travas = { ...Travas, aceitacentavos: action.payload };
      return { ...state, Travas };

    case TravasTypes.SET_DATA_TRAVA:
      Travas = { ...Travas, datatrava: action.payload };
      return { ...state, Travas };

    case TravasTypes.SET_QR_CODE:
      Travas = { ...Travas, qrcode: action.payload };
      return { ...state, Travas };

    case TravasTypes.SET_AO_VIVO:
      Travas = { ...Travas, aovivo: action.payload };
      return { ...state, Travas };

    case TravasTypes.SET_CREDITOS:
      Travas = { ...Travas, creditos: action.payload };
      return { ...state, Travas };

    case TravasTypes.SET_QTD_DE_VENDEDOR:
      Travas = { ...Travas, qtdvendedo: action.payload };
      return { ...state, Travas };

    case TravasTypes.SET_TIPO_CAIXA:
      Travas = { ...Travas, tipocaixa: action.payload };
      return { ...state, Travas };

    case TravasTypes.SET_VALOR_APOSTADO_INICIAL:
      Travas = { ...Travas, vlapostadoinicial: action.payload };
      return { ...state, Travas };

    case TravasTypes.SET_OUTROS_ESPORTES:
      Travas = { ...Travas, outrosesportes: action.payload };
      return { ...state, Travas };

    case TravasTypes.SET_MENSAGEM_BILHETE:
      Travas = { ...Travas, msgbilhete: action.payload };
      return { ...state, Travas };

    case TravasTypes.SET_REGULAMENTO:
      Travas = { ...Travas, regulamento: action.payload };
      return { ...state, Travas };

    default:
      return state;
  }
};

function DateNow() {
  var data = new Date(),
    dia = data.getDate().toString(),
    diaF = dia.length === 1 ? "0" + dia : dia,
    mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
    mesF = mes.length === 1 ? "0" + mes : mes,
    anoF = data.getFullYear(),
    hours = data.getHours().toString(),
    hoursF = hours.length === 1 ? "0" + hours : hours,
    min = data.getMinutes().toString(),
    minF = min.length === 1 ? "0" + min : min;
  return anoF + "-" + mesF + "-" + diaF + "T" + hoursF + ":" + minF;
}

export default reducer;
