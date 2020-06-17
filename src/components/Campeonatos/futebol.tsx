import React, { Component } from "react";

import HeadCard from "./headcard";
import ItemCampeonato from "./itemcampeonato";

interface StateProps {}

interface DispatchProps {}
interface OwnProps {
  active: boolean;
}

type Props = StateProps & DispatchProps & OwnProps;

export default class Futebol extends Component<Props> {
  render() {
    const { active } = this.props;
    return active === true ? (
      <div className="col-sm-12 card">
        <HeadCard name={"Futebol Campeonatos"} />

        <div className="card-body">
          <ItemCampeonato name={"Albania Championship"} totaljogos={0} />
          <ItemCampeonato name={"Alemanha - Bundesliga"} totaljogos={3} />
          <ItemCampeonato name={"Alemanha - Bundesliga I"} totaljogos={7} />
          <ItemCampeonato name={"Alemanha - Bundesliga II "} totaljogos={6} />
        </div>
      </div>
    ) : null;
  }
}
