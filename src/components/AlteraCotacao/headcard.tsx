import React, { Component } from "react";

interface StateProps {}

interface DispatchProps {}
interface OwnProps {
  name: String;
}

type Props = StateProps & DispatchProps & OwnProps;
export default class HeadCard extends Component<Props> {
  render() {
    const { name } = this.props;
    return (
      <div className="card-header ui-sortable-handle">
        <h3 className="card-title">
          <div className="row p-2">
            <i className="fas fa-exchange-alt mr-2"></i>
            {name}
          </div>
        </h3>
        <div className="card-tools">
          <div className="row pl-2 pr-2 pt-2 hove-item">
            <i style={{ fontSize: "1.5em" }} className="fas fa-save mr-2"></i>
            <h4>Salvar</h4>
          </div>
        </div>
      </div>
    );
  }
}
