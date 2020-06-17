import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ApplicationState } from "../../store";

import * as LtApostaActions from "../../reducers/ListaDeAposta/actions";
import { LtAposta } from "../../reducers/ListaDeAposta/types";
import ListaSport from "../../components/ListSport";

import Navbar from "../../components/Navbar";
import MainSidebar from "../../components/MainSidebar";
import ContentWrapper from "../../components/ContentWrapper";
import Footer from "../../components/Footer";

import Form from "../../components/ListaDeAposta/form";
import SelectedTable from "../../components/ListaDeAposta/selectedtable";
import BilheteAtivo from "../../components/ListaDeAposta/bilheteativotable";
import BilheteExcluido from "../../components/ListaDeAposta/bilheteexcluido";

interface StateProps {
  LtAposta: LtAposta;
}

interface DispatchProps {}
interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

class ListaDeApostaScreen extends Component<Props> {
  componentDidMount() {
    document.body.className = "sidebar-mini layout-fixed";
  }
  render() {
    const { LtAposta } = this.props;
    return (
      <div className="wrapper">
        <Navbar />
        <MainSidebar activeMenu={{ activeListaDeAposta: "active" }} />
        <ContentWrapper>
          <div className="col-sm-12">
            <ListaSport />
            <div className="col-sm-12 card pt-3">
              <Form />
              <SelectedTable />
              <BilheteAtivo active={LtAposta.bilheteativo} />
              <BilheteExcluido active={LtAposta.bilheteexcluido} />
            </div>
          </div>
        </ContentWrapper>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  LtAposta: state.LtApostaReducer.LtAposta,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(LtApostaActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListaDeApostaScreen);
