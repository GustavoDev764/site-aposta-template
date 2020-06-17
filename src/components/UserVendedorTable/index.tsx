import React, { Component } from "react";

export default class UserVendedorTable extends Component {
  render() {
    return (
      <div className="table-responsive">
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Login</th>
              <th>Comissão</th>
              <th>Telefone</th>
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
