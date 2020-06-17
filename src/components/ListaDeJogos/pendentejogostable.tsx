import React, { Component } from "react";

import ItemPendenteJogos from "./itempedentejogos";

interface StateProps {}
interface DispatchProps {}
interface OwnProps {
  active: boolean;
}

type Props = StateProps & DispatchProps & OwnProps;

export default class PendenteJogosTable extends Component<Props> {
  render() {
    const { active } = this.props;
    return active === true ? (
      <div className="row mt-3">
        <ItemPendenteJogos />
        <ItemPendenteJogos />
        <ItemPendenteJogos />
        <ItemPendenteJogos />
        <ItemPendenteJogos />
      </div>
    ) : null;
  }
}
