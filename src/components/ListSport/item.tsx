import React, { Component } from "react";

interface StateProps {}
interface DispatchProps {}
interface OwnProps {
  onClick: Function;
  active?: boolean;
  nameIcon: String;
  nameSport: String;
  materialIcons?: String;
}

type Props = StateProps & DispatchProps & OwnProps;

export default class Item extends Component<Props> {
  render() {
    const { active, nameIcon, nameSport, materialIcons, onClick } = this.props;

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
        <div className="p-2">
          <header className="d-flex justify-content-around mb-3">
            <i className={`${nameIcon} fa-2x`}>
              {materialIcons !== undefined ? materialIcons : null}
            </i>
          </header>
          <div className="d-flex flex-column justify-content-around align-items-center">
            {nameSport}
          </div>
        </div>
      </div>
    );
  }
}
