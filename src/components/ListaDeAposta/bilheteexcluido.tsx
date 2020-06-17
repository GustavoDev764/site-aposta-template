import React, { Component } from "react";

import BilheteTable from "./bilhetetable";
import ItemBilheteTable from "./itembilhetetable";

interface StateProps {}

interface DispatchProps {}
interface OwnProps {
  active: boolean;
}

type Props = StateProps & DispatchProps & OwnProps;

export default class BilheteExcluido extends Component<Props> {
  render() {
    const { active } = this.props;
    return active === true ? (
      <div className="col-sm-12">
        <BilheteTable>
          <ItemBilheteTable excluido />
          <ItemBilheteTable excluido />
        </BilheteTable>
      </div>
    ) : null;
  }
}
