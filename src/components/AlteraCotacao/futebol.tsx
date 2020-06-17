import React, { Component } from "react";

import ItemCotacao from "./itemcotacao";
import HeadCard from "./headcard";

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
        <HeadCard name={"Futebol Cotação"} />

        <div className="card-body">
          <ItemCotacao name={"Casa"} value={1} />
          <ItemCotacao name={"Empate"} value={6.9} />
          <ItemCotacao name={"Fora"} value={3.5} />
        </div>
      </div>
    ) : null;
  }
}
