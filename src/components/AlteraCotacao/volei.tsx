import React, { Component } from "react";

import ItemCotacao from "./itemcotacao";
import HeadCard from "./headcard";

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
      <div className="col-sm-12">
        <div className="col-sm-12 card">
          <HeadCard name={"Volei"} />
          <div className="card-body">
            <ItemCotacao name={"Casa"} value={2.3} />
            <ItemCotacao name={"Fora"} value={1.9} />
            <ItemCotacao name={"1 set - Casa Ganhar"} value={5.4} />
            <ItemCotacao name={"1 set - Fora Ganhar"} value={3.4} />
          </div>
        </div>
      </div>
    ) : null;
  }
}
