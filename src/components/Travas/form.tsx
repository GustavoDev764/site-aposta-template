import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ApplicationState } from "../../store";

import * as TravasActions from "../../reducers/Travas/actions";
import { Travas, YesOrNo, CaixaType } from "../../reducers/Travas/types";
import EditorText from "../EditorText";

interface StateProps {
  Travas: Travas;
}

interface DispatchProps {
  setName(e: React.FormEvent<HTMLInputElement>): void;
  setLogin(e: React.FormEvent<HTMLInputElement>): void;
  setSenha(e: React.FormEvent<HTMLInputElement>): void;
  setPrMaximo(e: React.FormEvent<HTMLInputElement>): void;
  setMultiplicado(e: React.FormEvent<HTMLInputElement>): void;
  setTravaMultiplicado(e: React.FormEvent<HTMLSelectElement>): void;
  setNMinimoJogos(e: React.FormEvent<HTMLInputElement>): void;
  setNMaximoJogos(e: React.FormEvent<HTMLInputElement>): void;
  setValorMinimo(e: React.FormEvent<HTMLInputElement>): void;
  setValorMaximo(e: React.FormEvent<HTMLInputElement>): void;
  setOddMinima(e: React.FormEvent<HTMLInputElement>): void;
  setOddMaxima(e: React.FormEvent<HTMLInputElement>): void;
  setLimiteConfrontos(e: React.FormEvent<HTMLInputElement>): void;
  setTempoCancelaBilhete(e: React.FormEvent<HTMLInputElement>): void;
  setApostaRisco(e: React.FormEvent<HTMLInputElement>): void;
  setDelayAoVivo(e: React.FormEvent<HTMLInputElement>): void;
  setTempoAoVivo(e: React.FormEvent<HTMLInputElement>): void;
  setClienteAoVivo(e: React.FormEvent<HTMLSelectElement>): void;
  setAceitaCentavos(e: React.FormEvent<HTMLSelectElement>): void;
  setDataTrava(e: React.FormEvent<HTMLInputElement>): void;
  setQrCode(e: React.FormEvent<HTMLSelectElement>): void;
  setAoVivo(e: React.FormEvent<HTMLSelectElement>): void;
  setCreditos(e: React.FormEvent<HTMLSelectElement>): void;
  setQTDVendedor(e: React.FormEvent<HTMLInputElement>): void;
  setTipoCaixa(e: React.FormEvent<HTMLSelectElement>): void;
  setValorApostadoInicial(e: React.FormEvent<HTMLInputElement>): void;
  setOutrosSports(e: React.FormEvent<HTMLSelectElement>): void;
  setMensageBilhete(e: React.FormEvent<HTMLInputElement>): void;
  setRegulamento(str: String): void;
}
interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

class Form extends Component<Props> {
  yesOrNo = () => {
    return (
      <>
        <option value={YesOrNo.SIM}>Sim</option>
        <option value={YesOrNo.NAO}>Não</option>
      </>
    );
  };

  CaixaType = () => {
    return (
      <>
        <option value={CaixaType.SIMPLES}>Simples</option>
        <option value={CaixaType.COMPLETO}>Completo</option>
      </>
    );
  };

  render() {
    const {
      Travas,
      setName,
      setLogin,
      setSenha,
      setPrMaximo,
      setMultiplicado,
      setTravaMultiplicado,
      setNMinimoJogos,
      setNMaximoJogos,
      setValorMinimo,
      setValorMaximo,
      setOddMinima,
      setOddMaxima,
      setLimiteConfrontos,
      setTempoCancelaBilhete,
      setApostaRisco,
      setDelayAoVivo,
      setTempoAoVivo,
      setClienteAoVivo,
      setAceitaCentavos,
      setDataTrava,
      setQrCode,
      setAoVivo,
      setCreditos,
      setQTDVendedor,
      setTipoCaixa,
      setValorApostadoInicial,
      setOutrosSports,
      setMensageBilhete,
      setRegulamento,
    } = this.props;
    return (
      <form className="card p-2 pb-3">
        <div className="col-sm-12 row">
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                value={"" + Travas.name}
                onChange={setName}
                className="form-control"
                id="name"
                placeholder="Digite o Nome"
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="login">Login</label>
              <input
                type="text"
                value={"" + Travas.login}
                onChange={setLogin}
                className="form-control"
                id="login"
                placeholder="Digite o Login"
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="Senha">Senha</label>
              <input
                type="password"
                value={"" + Travas.senha}
                autoComplete={"off"}
                onChange={setSenha}
                className="form-control"
                id="Senha"
                placeholder="Digite o Senha"
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="prmax">Prêmio Máximo</label>
              <input
                type="number"
                value={"" + Travas.prmaxima}
                onChange={setPrMaximo}
                className="form-control"
                id="prmax"
                min={0}
                placeholder="Digite o Máximo"
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="multplicado">Multiplicado</label>
              <input
                type="number"
                value={"" + Travas.multiplicado}
                onChange={setMultiplicado}
                className="form-control"
                id="multplicado"
                min={0}
                placeholder="Digite o Multiplicado"
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="travamult">Trava multiplicado</label>
              <select
                value={Travas.travamultiplicado}
                onChange={setTravaMultiplicado}
                className="form-control"
                id="travamult"
              >
                {this.yesOrNo()}
              </select>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="nminjogos">N° mínimo jogos</label>
              <input
                type="number"
                value={"" + Travas.nminimojogos}
                onChange={setNMinimoJogos}
                className="form-control"
                id="nminjogos"
                min={0}
                placeholder="Digite o N° mínimo jogos"
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="nmaxjogos">Nº máximo jogos</label>
              <input
                type="number"
                value={"" + Travas.nmaximojogos}
                onChange={setNMaximoJogos}
                className="form-control"
                id="nmaxjogos"
                min={0}
                placeholder="Digite o N° máximo jogos"
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="vlmax">Valor mínimo</label>
              <input
                type="number"
                value={"" + Travas.vlminino}
                onChange={setValorMinimo}
                className="form-control"
                id="vlmax"
                min={0}
                placeholder="Digite o N° Valor mínimo"
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="vlmin">Valor máximo</label>
              <input
                type="number"
                value={"" + Travas.vlmaximo}
                onChange={setValorMaximo}
                className="form-control"
                id="vlmin"
                min={0}
                placeholder="Digite o N° Valor máximo"
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="oddmin">Odd mínima</label>
              <input
                type="number"
                value={"" + Travas.oddminima}
                onChange={setOddMinima}
                className="form-control"
                id="oddmin"
                min={0}
                step={0.1}
                placeholder="Digite Odd mínima"
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="oddmax">Odd máxima</label>
              <input
                type="number"
                value={"" + Travas.oddmaxima}
                onChange={setOddMaxima}
                className="form-control"
                id="oddmax"
                min={0}
                step={0.1}
                placeholder="Digite Odd máxima"
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="ltconfrontos">Límite confrontos</label>
              <input
                type="number"
                value={"" + Travas.limiteconfrontos}
                onChange={setLimiteConfrontos}
                className="form-control"
                id="ltconfrontos"
                min={0}
                placeholder="Digite Límite confrontos"
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="tmcancelabil">Tempo Cancelar Bilhete</label>
              <input
                type="number"
                value={"" + Travas.tempocancelabilhete}
                onChange={setTempoCancelaBilhete}
                className="form-control"
                id="tmcancelabil"
                min={0}
                placeholder="Digite Tempo Cancelar Bilhete"
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="apostaderisco">Aposta de risco</label>
              <input
                type="number"
                value={"" + Travas.apostarisco}
                onChange={setApostaRisco}
                className="form-control"
                id="apostaderisco"
                min={0}
                placeholder="Digite Aposta de risco"
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="delayaovivo">Delay ao vivo</label>
              <input
                type="number"
                value={"" + Travas.delayaovivo}
                onChange={setDelayAoVivo}
                className="form-control"
                id="delayaovivo"
                min={0}
                placeholder="Digite Delay ao vivo"
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="tmaovivo">Tempo ao vivo</label>
              <input
                type="number"
                value={"" + Travas.tempoaovivo}
                onChange={setTempoAoVivo}
                className="form-control"
                id="tmaovivo"
                min={0}
                placeholder="Digite Tempo ao vivo"
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="clnoaovivo">Cliente no ao vivo</label>
              <select
                value={Travas.clienteaovivo}
                onChange={setClienteAoVivo}
                className="form-control"
                id="clnoaovivo"
              >
                {this.yesOrNo()}
              </select>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="aceitacentavo">Aceitar centavos</label>
              <select
                value={Travas.aceitacentavos}
                onChange={setAceitaCentavos}
                className="form-control"
                id="aceitacentavo"
              >
                {this.yesOrNo()}
              </select>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="datatrava">Data trava</label>
              <input
                type="datetime-local"
                value={"" + Travas.datatrava}
                onChange={setDataTrava}
                className="form-control"
                id="datatrava"
                min={0}
                placeholder="Digite Tempo ao vivo"
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="qrcode">QrCode</label>
              <select
                value={Travas.qrcode}
                onChange={setQrCode}
                className="form-control"
                id="qrcode"
              >
                {this.yesOrNo()}
              </select>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="aovivo">AO VIVO</label>
              <select
                value={Travas.aovivo}
                onChange={setAoVivo}
                className="form-control"
                id="aovivo"
              >
                {this.yesOrNo()}
              </select>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="credito">Créditos</label>
              <select
                value={Travas.creditos}
                onChange={setCreditos}
                className="form-control"
                id="credito"
              >
                {this.yesOrNo()}
              </select>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="qtdvendedor">Qtde. Vendedor</label>
              <input
                type="number"
                value={"" + Travas.qtdvendedo}
                onChange={setQTDVendedor}
                className="form-control"
                id="qtdvendedor"
                min={0}
                placeholder="Digite Qtde. Vendedor"
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="tpcaixa">Tipo Caixa</label>
              <select
                value={Travas.tipocaixa}
                onChange={setTipoCaixa}
                className="form-control"
                id="tpcaixa"
              >
                {this.CaixaType()}
              </select>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="vlapostado">Valor apostado inicial</label>
              <input
                type="number"
                value={"" + Travas.vlapostadoinicial}
                onChange={setValorApostadoInicial}
                className="form-control"
                id="vlapostado"
                min={0}
                placeholder="Digite Valor apostado inicial"
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="outroesport">Outros esportes</label>
              <select
                value={Travas.outrosesportes}
                onChange={setOutrosSports}
                className="form-control"
                id="outroesport"
              >
                {this.yesOrNo()}
              </select>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="msgbilhete">Mensagem Bilhete</label>
              <input
                type="text"
                value={"" + Travas.msgbilhete}
                onChange={setMensageBilhete}
                className="form-control"
                id="msgbilhete"
                maxLength={30}
                placeholder="Digite Mensagem Bilhete"
              />
            </div>
          </div>

          <div className="form-group pl-2">
            <label>Regulamento</label>
          </div>
          <EditorText
            handleEditorChange={setRegulamento}
            initialValue={Travas.regulamento}
          />
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  Travas: state.TravasReducer.Travas,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(TravasActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
