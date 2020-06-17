import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ApplicationState } from "../../store";

import * as LisSportActions from "../../reducers/ListSport/actions";
import { ListSport } from "../../reducers/ListSport/types";
import Item from "./item";

interface StateProps {
  ListSport: ListSport;
}

interface DispatchProps {
  selectedFutebol(): void;
  selectedBasquete(): void;
  selectedVolei(): void;
  selectedMMA(): void;
}
interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

class ListaSport extends Component<Props> {
  render() {
    const {
      ListSport,
      selectedFutebol,
      selectedBasquete,
      selectedVolei,
      selectedMMA,
    } = this.props;
    return (
      <div className="d-flex flex-sm-row justify-content-center bd-highlight mb-3">
        <div className="row">
          <Item
            active={ListSport.sportfutebol}
            onClick={selectedFutebol}
            nameIcon={"fas fa-futbol"}
            nameSport={"Futebol"}
          />
          <Item
            active={ListSport.sportbasquete}
            onClick={selectedBasquete}
            nameIcon={"fas fa-basketball-ball"}
            nameSport={"Basquete"}
          />
          <Item
            active={ListSport.sportvolei}
            onClick={selectedVolei}
            nameIcon={"fas fa-volleyball-ball"}
            nameSport={"Vôlei"}
          />
          <Item
            active={ListSport.sportmma}
            onClick={selectedMMA}
            nameIcon={"material-icons"}
            materialIcons={"sports_mma"}
            nameSport={"MMA"}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  ListSport: state.ListSportRC.ListSport,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(LisSportActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListaSport);
