import React, { Component } from "react";

import ItemTodosOsJogos from "./itemtodoosjogos";

interface StateProps {}

interface DispatchProps {}
interface OwnProps {
  active: boolean;
}

type Props = StateProps & DispatchProps & OwnProps;

export default class TodoOsJogosTable extends Component<Props> {
  render() {
    const { active } = this.props;
    return active === true ? (
      <div className="row mt-3">
        <ItemTodosOsJogos
          name={
            "AD Juventud Escazucena x Sporting San Jose - 08/06 16:00 - 89894939"
          }
        />
        <ItemTodosOsJogos
          name={
            "AD Juventud Escazucena x Sporting San Jose - 08/06 16:00 - 89894939"
          }
        />
        <ItemTodosOsJogos
          name={
            "AD Juventud Escazucena x Sporting San Jose - 08/06 16:00 - 89894939"
          }
        />
        <ItemTodosOsJogos
          name={
            "AD Juventud Escazucena x Sporting San Jose - 08/06 16:00 - 89894939"
          }
        />
      </div>
    ) : null;
  }
}
