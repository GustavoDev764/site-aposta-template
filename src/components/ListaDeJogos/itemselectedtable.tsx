import React, { Component } from "react";

interface StateProps {}

interface DispatchProps {}
interface OwnProps {
  onClick: Function;
  name: String;
  icon: String;
  nameIcon?: String;
  active: boolean;
}

type Props = StateProps & DispatchProps & OwnProps;

export default class ItemSelectedTable extends Component<Props> {
  render() {
    const { name, active, onClick, nameIcon, icon } = this.props;
    return (
      <div
        onClick={() => {
          onClick();
        }}
        className={
          active === true
            ? "p-2 mr-2 ml-2 bd-highlight hove-item active-item click-me"
            : "p-2 mr-2 ml-2 bd-highlight hove-item click-me"
        }
      >
        <div className="row pl-2 pr-2">
          <i className={`${icon} mr-2`}>
            {nameIcon !== undefined ? nameIcon : null}
          </i>
          {name}
        </div>
      </div>
    );
  }
}
