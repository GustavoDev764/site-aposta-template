import React, { Component } from "react";

import HeadCard from "./headcard";
import ItemCampeonato from "./itemcampeonato";

interface StateProps {}

interface DispatchProps {}
interface OwnProps {
  active: boolean;
}

type Props = StateProps & DispatchProps & OwnProps;

export default class Basquete extends Component<Props> {
  render() {
    const { active } = this.props;
    return active === true ? (
      <div className="col-sm-12 card">
        <HeadCard name={"Basquete Campeonatos"} />

        <div className="card-body">
          <ItemCampeonato name={"NBA"} totaljogos={0} />
          <ItemCampeonato name={"NBC"} totaljogos={0} />
          <ItemCampeonato name={"NBB"} totaljogos={0} />
        </div>
      </div>
    ) : null;
  }
}
