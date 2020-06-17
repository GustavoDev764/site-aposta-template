import React, { Component } from "react";

interface StateProps {}
interface DispatchProps {}
interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

export default class ItemFavoritoJogos extends Component<Props> {
  render() {
    return (
      <div className="row-color col-sm-12 d-flex justify-content-between">
        <div className="p-2 bd-highlight">Hamburg x Holstein Kiel</div>
        <div className="p-2 bd-highlight">61 Bilhete</div>
        <div className="p-2 bd-highlight cusor-point icon-all">
          <i className="material-icons">bar_chart</i>
        </div>
      </div>
    );
  }
}
