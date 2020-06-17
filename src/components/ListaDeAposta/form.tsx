import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ApplicationState } from "../../store";

import * as LtApostaActions from "../../reducers/ListaDeAposta/actions";
import { LtAposta } from "../../reducers/ListaDeAposta/types";
import DataInputRange from "../DataInputRange";

interface StateProps {
  LtAposta: LtAposta;
}

interface DispatchProps {
  setDataInicio(date: Date): void;
  setDataFim(date: Date): void;
  setBuscaAposta(event: React.FormEvent<HTMLInputElement>): void;
  setTypeAposta(event: React.FormEvent<HTMLSelectElement>): void;
}
interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

class Form extends Component<Props> {
  render() {
    const {
      LtAposta,
      setDataInicio,
      setDataFim,
      setBuscaAposta,
      setTypeAposta,
    } = this.props;
    return (
      <div className="col-sm-12 mb-3 mt-3">
        <div className="d-flex justify-content-end">
          <div className="p-2 mr-2 ml-2 bd-highlight">
            <div className="form-group">
              <label htmlFor="jgbusca">Pesquisa:</label>
              <input
                type="text"
                value={"" + LtAposta.buscaaposta}
                onChange={setBuscaAposta}
                className="form-control"
                id="jgbusca"
              />
            </div>
          </div>
          <div className="p-2 mr-2 ml-2 bd-highlight">
            <div className="form-group">
              <label htmlFor="ativo">Status:</label>
              <select
                onChange={setTypeAposta}
                className="form-control"
                id="ativo"
              >
                <option value={"Todos"}>Todos</option>
                <option value={"Aguardando"}>Aguardando</option>
                <option value={"Premidas"}>Premidas</option>
                <option value={"Perdidas"}>Perdidas</option>
              </select>
            </div>
          </div>

          <div className="p-2 mr-2 ml-2 bd-highlight">
            <DataInputRange
              startDate={LtAposta.datainicio}
              endDate={LtAposta.datatermino}
              setStartDate={setDataInicio}
              setEndDate={setDataFim}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  LtAposta: state.LtApostaReducer.LtAposta,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(LtApostaActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
