import React, { Component } from "react";

interface StateProps {}

interface DispatchProps {}
interface OwnProps {
  ativo?: boolean;
  excluido?: boolean;
}

type Props = StateProps & DispatchProps & OwnProps;

export default class ItemBilheteTable extends Component<Props> {
  render() {
    const { ativo, excluido } = this.props;
    return (
      <tr>
        <td>
          <div className="d-flex flex-row bd-highlight">
            <div className="p-2 bd-highlight">
              <span>D23579FF</span>
            </div>
          </div>
        </td>
        <td>
          <div className="d-flex flex-row bd-highlight">
            <div className="p-2 bd-highlight">
              <span>Gustavo</span>
            </div>
          </div>
        </td>
        <td>
          <div className="d-flex flex-row bd-highlight">
            <div className="p-2 bd-highlight">
              <span>C. Ronaldo</span>
            </div>
          </div>
        </td>
        <td>
          <div className="d-flex flex-row bd-highlight">
            <div className="p-2 bd-highlight">
              <span>5,00</span>
            </div>
          </div>
        </td>
        <td>
          <div className="d-flex flex-row bd-highlight">
            <div className="p-2 bd-highlight">
              <span>3,50</span>
            </div>
          </div>
        </td>
        <td>
          <div className="d-flex flex-row bd-highlight">
            <div className="p-2 bd-highlight">
              <span>2.485,58</span>
            </div>
          </div>
        </td>
        <td>
          <div className="d-flex flex-row bd-highlight">
            <div className="p-2 bd-highlight">
              <span>Aguardando</span>
            </div>
          </div>
        </td>
        <td>
          <div className="d-flex flex-row bd-highlight">
            <div className="p-2 bd-highlight">
              <span>9</span>
            </div>
          </div>
        </td>
        <td>
          <div className="d-flex flex-row bd-highlight">
            <div className="p-2 bd-highlight">
              <span>09/06 19:01</span>
            </div>
          </div>
        </td>
        <td>
          <div className="d-flex flex-row bd-highlight">
            {ativo === true ? (
              <div className="p-2 bd-highlight">
                <i className="material-icons">delete</i>
              </div>
            ) : null}

            {excluido === true ? (
              <div className="p-2 bd-highlight">
                <i className="material-icons">refresh</i>
              </div>
            ) : null}

            <div className="p-2 bd-highlight">
              <i className="material-icons">remove_red_eye</i>
            </div>
          </div>
        </td>
      </tr>
    );
  }
}
