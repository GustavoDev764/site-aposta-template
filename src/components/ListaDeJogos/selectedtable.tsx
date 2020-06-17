import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ApplicationState } from "../../store";

import * as LtJogosActions from "../../reducers/ListaDeJogos/actions";
import { LtJogos, SelectedTableTypes } from "../../reducers/ListaDeJogos/types";
import ItemSelectedTable from "./itemselectedtable";

interface StateProps {
  LtJogos: LtJogos;
}

interface DispatchProps {
  setTodoOsJogos(): void;
  setFavoritoJogos(): void;
  setPendenteJogos(): void;
}
interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

class SelectedTable extends Component<Props> {
  render() {
    const {
      LtJogos,
      setTodoOsJogos,
      setFavoritoJogos,
      setPendenteJogos,
    } = this.props;
    return (
      <div className="col-sm-12 mb-3 mt-3">
        <div className="d-flex justify-content-center">
          <ItemSelectedTable
            icon={"material-icons"}
            nameIcon={"receipt"}
            onClick={setTodoOsJogos}
            name={SelectedTableTypes.TODOS_OS_JOGOS}
            active={LtJogos.tabletodososjogos}
          />

          <ItemSelectedTable
            icon={"material-icons"}
            nameIcon={"star"}
            onClick={setFavoritoJogos}
            name={SelectedTableTypes.FAVORITO_JOGOS}
            active={LtJogos.tablejogosfavoritos}
          />
          <ItemSelectedTable
            icon={"material-icons"}
            nameIcon={"history"}
            onClick={setPendenteJogos}
            name={SelectedTableTypes.PENDENTE_JOGOS}
            active={LtJogos.tablejogospendentes}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(SelectedTable);
