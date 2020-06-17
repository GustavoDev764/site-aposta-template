import React, { Component } from "react";

import { connect } from "react-redux";
//import { bindActionCreators, Dispatch } from "redux";
import { ApplicationState } from "../../store";

import Navbar from "../../components/Navbar";
import MainSidebar from "../../components/MainSidebar";
import ContentWrapper from "../../components/ContentWrapper";
import Footer from "../../components/Footer";

import ListaSport from "../../components/ListSport";
import Futebol from "../../components/Campeonatos/futebol";
import Basquete from "../../components/Campeonatos/basquete";
import Volei from "../../components/Campeonatos/volei";
import MMA from "../../components/Campeonatos/mma";

import { ListSport } from "../../reducers/ListSport/types";

interface StateProps {
  ListSport: ListSport;
}

interface DispatchProps {}
interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

class CampeonatosScreen extends Component<Props> {
  componentDidMount() {
    document.body.className = "sidebar-mini layout-fixed";
  }
  render() {
    const { ListSport } = this.props;
    return (
      <div className="wrapper">
        <Navbar />
        <MainSidebar activeMenu={{ activeCampeonato: "active" }} />
        <ContentWrapper>
          <div className="col-sm-12">
            <ListaSport />
            <Futebol active={ListSport.sportfutebol} />
            <Basquete active={ListSport.sportbasquete} />
            <Volei active={ListSport.sportvolei} />
            <MMA active={ListSport.sportmma} />
          </div>
        </ContentWrapper>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  ListSport: state.ListSportRC.ListSport,
});

// const mapDispatchToProps = (dispatch: Dispatch) =>
//   bindActionCreators(LisSportActions, dispatch);

export default connect(mapStateToProps)(CampeonatosScreen);
