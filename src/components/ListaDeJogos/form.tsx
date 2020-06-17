import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ApplicationState } from "../../store";

import DataInputRange from "../DataInputRange";
import * as LtJogosActions from "../../reducers/ListaDeJogos/actions";
import { LtJogos } from "../../reducers/ListaDeJogos/types";

interface StateProps {
  LtJogos: LtJogos;
}

interface DispatchProps {
  setDateInicio(date: Date): void;
  setDateFim(date: Date): void;
  setNameJogos(event: React.FormEvent<HTMLInputElement>): void;
  setTipoDeJogos(event: React.FormEvent<HTMLSelectElement>): void;
}
interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

class Form extends Component<Props> {
  render() {
    const {
      LtJogos,
      setDateInicio,
      setDateFim,
      setNameJogos,
      setTipoDeJogos,
    } = this.props;
    return (
      <div className="col-sm-12 mb-3 mt-3">
        <div className="d-flex justify-content-end">
          <div className="p-2 mr-2 ml-2 bd-highlight">
            <div className="form-group">
              <label htmlFor="ativo">Tipo de Jogos:</label>
              <select
                onChange={setTipoDeJogos}
                className="form-control"
                id="ativo"
              >
                <option value={"todos-os-jogos"}>Todos os Jogos</option>
                <option value={"jogos-em-tempo-normal"}>
                  Jogos em tempo Normal
                </option>
                <option value={"jogos-ao-vivo"}>Jogos ao vivo</option>
              </select>
            </div>
          </div>
          <div className="p-2 mr-2 ml-2 bd-highlight">
            <div className="form-group">
              <label htmlFor="jgbusca">Busca Jogos:</label>
              <input
                onChange={setNameJogos}
                type="text"
                className="form-control"
                id="jgbusca"
              />
            </div>
          </div>
          <div className="p-2 mr-2 ml-2 bd-highlight">
            <DataInputRange
              startDate={LtJogos.datainicio}
              endDate={LtJogos.datatermino}
              setStartDate={setDateInicio}
              setEndDate={setDateFim}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  LtJogos: state.LtJogosReducer.LtJogos,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(LtJogosActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
