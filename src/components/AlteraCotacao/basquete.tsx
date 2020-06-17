import React, { Component } from "react";

import ItemCotacao from "./itemcotacao";
import HeadCard from "./headcard";

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
      <div className="col-sm-12">
        <div className="col-sm-12 card">
          <HeadCard name={"Basquete Cotação"} />
          <div className="card-body">
            <ItemCotacao name={"Casa"} value={4.4} />
            <ItemCotacao name={"Fora"} value={4.5} />
            <ItemCotacao name={"Prorrogação"} value={25.4} />
          </div>
        </div>
      </div>
    ) : null;
  }
}
