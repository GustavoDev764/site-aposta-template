import React, { Component } from "react";

interface StateProps {}
interface DispatchProps {}
interface OwnProps {
  editeClick?: Function;
  handleLock?: Function;
  name: String;
}

type Props = StateProps & DispatchProps & OwnProps;

export default class ItemTodosOsJogos extends Component<Props> {
  state = {
    lock: true,
  };

  handleLock = () => {
    const { lock } = this.state;
    this.setState({ lock: !lock });
  };

  render() {
    const { name } = this.props;

    return (
      <div className="row-color col-sm-12 d-flex justify-content-between">
        <div className="p-2 bd-highlight">{name}</div>

        <div className="p-2 bd-highlight">
          <div className="d-flex justify-content-end">
            <div className="p-2 mr-2 bd-highlight cusor-point icon-all">
              <i className="material-icons">edit</i>
            </div>
            <div
              onClick={this.handleLock}
              className="p-2 bd-highlight cusor-point icon-all"
            >
              <i className="material-icons">
                {this.state.lock === true ? "lock_open" : "lock"}
              </i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
