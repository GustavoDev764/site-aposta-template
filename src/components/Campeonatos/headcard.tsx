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
            <i className="nav-icon fas fa-trophy mr-2"></i>
            {name}
          </div>
        </h3>
      </div>
    );
  }
}
