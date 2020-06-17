import React, { Component } from "react";

export default class BilheteTable extends Component {
  render() {
    return (
      <div className="table-responsive">
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Vendedor</th>
              <th>Cliente</th>
              <th>Valor</th>
              <th>Commisão</th>
              <th>Prêmio</th>
              <th>Status</th>
              <th>Jogos</th>
              <th>Horário</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>{this.props.children}</tbody>
        </table>
      </div>
    );
  }
}
