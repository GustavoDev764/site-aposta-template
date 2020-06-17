import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ApplicationState } from "../../store";

import * as LtApostaActions from "../../reducers/ListaDeAposta/actions";
import { LtAposta } from "../../reducers/ListaDeAposta/types";

import ItemSelectedTable from "./itemselectedtable";

interface StateProps {
  LtAposta: LtAposta;
}

interface DispatchProps {
  setBilheteAtivo(): void;
  setBilheteExcluido(): void;
}
interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

class SelectedTable extends Component<Props> {
  render() {
    const { LtAposta, setBilheteAtivo, setBilheteExcluido } = this.props;
    return (
      <div className="col-sm-12 mb-3 mt-3">
        <div className="d-flex justify-content-center">
          <ItemSelectedTable
            name={"Bilhete Ativos"}
            icon={"material-icons"}
            nameIcon={"receipt"}
            active={LtAposta.bilheteativo}
            onClick={setBilheteAtivo}
          />
          <ItemSelectedTable
            name={"Bilhete Excluidos"}
            icon={"material-icons"}
            nameIcon={"delete_outline"}
            active={LtAposta.bilheteexcluido}
            onClick={setBilheteExcluido}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(SelectedTable);
