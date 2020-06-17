import React, { Component } from "react";

import ItemCotacao from "./itemcotacao";
import HeadCard from "./headcard";

interface StateProps {}

interface DispatchProps {}
interface OwnProps {
  active: boolean;
}

type Props = StateProps & DispatchProps & OwnProps;

export default class MMA extends Component<Props> {
  render() {
    const { active } = this.props;
    return active === true ? (
      <div className="col-sm-12">
        <div className="col-sm-12 card">
          <HeadCard name={"Boxing/MMA"} />
          <div className="card-body">
            <ItemCotacao name={"Casa"} value={3.3} />
            <ItemCotacao name={"Fora"} value={3.9} />
          </div>
        </div>
      </div>
    ) : null;
  }
}
