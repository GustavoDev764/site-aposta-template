import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ApplicationState } from "../../store";

import * as LtJogosActions from "../../reducers/ListaDeJogos/actions";
import { LtJogos } from "../../reducers/ListaDeJogos/types";

import Navbar from "../../components/Navbar";
import MainSidebar from "../../components/MainSidebar";
import ContentWrapper from "../../components/ContentWrapper";
import Footer from "../../components/Footer";

import Form from "../../components/ListaDeJogos/form";
import ListaSport from "../../components/ListSport";
import SelectedTable from "../../components/ListaDeJogos/selectedtable";
import TodoOsJogosTable from "../../components/ListaDeJogos/todoosjogostable";
import FavoritoJogosTable from "../../components/ListaDeJogos/favoritojogostable";
import PendenteJogosTable from "../../components/ListaDeJogos/pendentejogostable";

interface StateProps {
  LtJogos: LtJogos;
}

interface DispatchProps {}
interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

class ListaDeJogosScreen extends Component<Props> {
  componentDidMount() {
    document.body.className = "sidebar-mini layout-fixed";
  }
  render() {
    const { LtJogos } = this.props;

    return (
      <div className="wrapper">
        <Navbar />
        <MainSidebar activeMenu={{ activeListaDeJogos: "active" }} />
        <ContentWrapper>
          <div className="col-sm-12">
            <ListaSport />
            <div className="col-sm-12 card p-2 pl-3 pr-3">
              <Form />
              <SelectedTable />
              <TodoOsJogosTable active={LtJogos.tabletodososjogos} />
              <FavoritoJogosTable active={LtJogos.tablejogosfavoritos} />
              <PendenteJogosTable active={LtJogos.tablejogospendentes} />
            </div>
          </div>
        </ContentWrapper>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  LtJogos: state.LtJogosReducer.LtJogos,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(LtJogosActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListaDeJogosScreen);
