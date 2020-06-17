import React, { Component } from "react";

//import "./style.css";

interface StateProps {}

interface DispatchProps {}

interface OwnProps {
  title: String;
  total?: String;
  value: String;
  succes?: boolean;
}

type Props = StateProps & DispatchProps & OwnProps;

export default class MiniBox extends Component<Props> {
  render() {
    const { title, total, value, succes } = this.props;

    return (
      <div className="tm-mini-box m-2">
        <div className={"mini-box"}>
          <header className={"mini-box-head"}>
            <span>{title}</span>
            {total !== undefined ? <span>{total}</span> : null}
          </header>
          <div className={"mini-box-body"}>
            <strong className={succes === true ? "color-success" : ""}>
              R$ {value}
            </strong>
          </div>
        </div>
      </div>
    );
  }
}
