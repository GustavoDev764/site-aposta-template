import React, { Component } from "react";

interface StateProps {}

interface DispatchProps {}
interface OwnProps {
  name: String;
  value: Number;
}

type Props = StateProps & DispatchProps & OwnProps;

export default class ItemCotacao extends Component<Props> {
  state = {
    value: 0,
  };
  componentDidMount() {
    const { value } = this.props;
    this.setState({ value });
  }

  render() {
    const { name } = this.props;

    return (
      <div className="d-flex justify-content-between hove-item">
        <div className="pt-4 pl-3  bd-highlight">{name}</div>
        <div className="pt-3 pr-3 bd-highlight">
          <div className="form-group">
            <input
              type="number"
              value={this.state.value}
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                this.setState({ value: e.currentTarget.value });
              }}
              min={0}
              step={0.1}
              className="form-control"
              placeholder="Cotação"
            />
          </div>
        </div>
      </div>
    );
  }
}
