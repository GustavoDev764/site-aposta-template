import React, { Component } from "react";

import HeadCard from "./headcard";
import ItemCampeonato from "./itemcampeonato";

interface StateProps {}

interface DispatchProps {}
interface OwnProps {
  active: boolean;
}

type Props = StateProps & DispatchProps & OwnProps;

export default class Volei extends Component<Props> {
  render() {
    const { active } = this.props;
    return active === true ? (
      <div className="col-sm-12 card">
        <HeadCard name={"Volei Campeonatos"} />

        <div className="card-body">
          <ItemCampeonato
            name={"Superliga Brasileira - Masculino"}
            totaljogos={0}
          />
          <ItemCampeonato
            name={"Superliga Brasileira - Feminino"}
            totaljogos={3}
          />
          <ItemCampeonato
            name={"Liga das Nações - Masculino"}
            totaljogos={15}
          />
          <ItemCampeonato
            name={"Liga das Nações - Feminino "}
            totaljogos={10}
          />
        </div>
      </div>
    ) : null;
  }
}
