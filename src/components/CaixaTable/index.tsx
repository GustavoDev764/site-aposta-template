import React, { Component } from "react";

export default class CaixaTable extends Component {
  render() {
    return (
      <div className="table-responsive">
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Entradas</th>
              <th>Ent. Aberto</th>
              <th>Ent. Perdidas</th>
              <th>Ent. Premiadas</th>
              <th>Comissão</th>
              <th>Com. Gerente</th>
              <th>Saídas</th>
              <th>Líquidos</th>
            </tr>
          </thead>
          <tbody>{this.props.children}</tbody>
        </table>
      </div>
    );
  }
}
