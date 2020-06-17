import React, { Component } from "react";

import DataInputRange from "../DataInputRange";

interface StateProps {}
interface DispatchProps {}
interface OwnProps {
  nameUsers: String;
}

type Props = StateProps & DispatchProps & OwnProps;

export default class FormBuscaCaixa extends Component<Props> {
  state = {
    startDate: new Date(),
    setEndDate: new Date(),
  };

  dateStart = (date: Date) => {
    console.log("dateStart", date);
    this.setState({ startDate: date });
  };

  dateEnd = (date: Date) => {
    console.log("dateEnd", date);
    this.setState({ setEndDate: date });
  };

  render() {
    const { nameUsers } = this.props;
    return (
      <div className="row">
        <div className="col-sm-3">
          <div className="form-group">
            <label htmlFor="sel1">Selecione o {nameUsers}:</label>
            <select className="form-control" id="sel1">
              <option>Todos os {nameUsers}</option>
              <option>Gustavo</option>
              <option>Uibson</option>
              <option>Fladson</option>
            </select>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="form-group">
            <label htmlFor="nomegerente">Nome do {nameUsers}:</label>
            <input
              type="text"
              placeholder="Nome do Gerente"
              className="form-control"
              id="nomegerente"
            />
          </div>
        </div>

        <div className="col-sm-4">
          <DataInputRange
            endDate={this.state.setEndDate}
            startDate={this.state.startDate}
            setEndDate={this.dateEnd}
            setStartDate={this.dateStart}
          />
        </div>
      </div>
    );
  }
}
