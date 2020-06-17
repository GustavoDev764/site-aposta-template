import React, { Component } from "react";

interface StateProps {}

interface DispatchProps {}
interface OwnProps {
  name: String;
  totaljogos: Number;
}

type Props = StateProps & DispatchProps & OwnProps;

export default class ItemCampeonato extends Component<Props> {
  state = {
    lock: false,
    fav: false,
  };

  handlefavo = () => {
    const { fav } = this.state;
    this.setState({ fav: !fav });
  };

  handleLock = () => {
    const { lock } = this.state;
    this.setState({ lock: !lock });
  };

  render() {
    const { name, totaljogos } = this.props;
    const { lock, fav } = this.state;
    return (
      <div className="d-flex justify-content-between hove-item">
        <div className="pt-4 pl-3  bd-highlight">
          <strong>{name}</strong> -{" "}
          <span style={{ fontSize: ".9em", color: "#8e8e8e" }}>
            {totaljogos} jogos disponível
          </span>
        </div>
        <div className="pt-3 pr-3 bd-highlight">
          <div className="d-flex flex-row bd-highlight mb-3">
            <div className="p-2 mr-2 bd-highlight cusor-point icon-all">
              <i className="material-icons">edit</i>
            </div>
            <div
              onClick={this.handlefavo}
              className="p-2 mr-2 bd-highlight cusor-point icon-all"
            >
              <i className="material-icons">
                {fav === true ? "favorite" : "favorite_border"}
              </i>
            </div>
            <div
              onClick={this.handleLock}
              className="p-2 mr-2 bd-highlight cusor-point icon-all"
            >
              <i className="material-icons">
                {lock === true ? "lock" : "lock_open"}
              </i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
