import React, { Component } from "react";

import BilheteTable from "./bilhetetable";
import ItemBilheteTable from "./itembilhetetable";

interface StateProps {}

interface DispatchProps {}
interface OwnProps {
  active: boolean;
}

type Props = StateProps & DispatchProps & OwnProps;

export default class BilheteAtivo extends Component<Props> {
  render() {
    const { active } = this.props;
    return active === true ? (
      <div className="col-sm-12">
        <BilheteTable>
          <ItemBilheteTable ativo />
          <ItemBilheteTable ativo />
          <ItemBilheteTable ativo />
          <ItemBilheteTable ativo />
        </BilheteTable>
      </div>
    ) : null;
  }
}
