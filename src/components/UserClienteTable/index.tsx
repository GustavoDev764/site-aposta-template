import React, { Component } from "react";

export default class UserClienteTable extends Component {
  render() {
    return (
      <div className="table-responsive">
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Login</th>
              <th>Carteira</th>
              <th>Ativo</th>
              <th>Data Criação</th>
              <th>Alterado em</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>{this.props.children}</tbody>
        </table>
      </div>
    );
  }
}
