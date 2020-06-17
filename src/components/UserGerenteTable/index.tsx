import React, { Component } from "react";

export default class UserGerenteTable extends Component {
  render() {
    return (
      <div className="table-responsive">
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Login</th>
              <th>Tot. vendedor</th>
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
