import React, { Component } from "react";

interface StateProps {}

interface DispatchProps {}
interface OwnProps {
  msg: String;
}

type Props = StateProps & DispatchProps & OwnProps;

export default class MsgSuccess extends Component<Props> {
  render() {
    const { msg } = this.props;
    return (
      <div
        className="alert alert-success alert-dismissible fade show"
        role="alert"
      >
        <strong>{msg}</strong>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}
