import React, { Component } from "react";

import ItemFavoritoJogos from "./itemfavoritojogos";

interface StateProps {}

interface DispatchProps {}
interface OwnProps {
  active: boolean;
}

type Props = StateProps & DispatchProps & OwnProps;

export default class FavoritoJogosTable extends Component<Props> {
  render() {
    const { active } = this.props;
    return active === true ? (
      <div className="row mt-3">
        <ItemFavoritoJogos />
        <ItemFavoritoJogos />
        <ItemFavoritoJogos />
        <ItemFavoritoJogos />
      </div>
    ) : null;
  }
}
