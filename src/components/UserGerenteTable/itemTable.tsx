import React, { Component } from "react";

interface StateProps {}
interface DispatchProps {}
interface OwnProps {
  handleEditeShow: Function;
  handleDeleteShow: Function;
}

type Props = StateProps & DispatchProps & OwnProps;

export default class ItemTable extends Component<Props> {
  private copyText: HTMLInputElement = document.createElement("input");

  myCopy = () => {
    //this.copyText.value = "qweqew";
    // this.copyText.select();
    // this.copyText.setSelectionRange(0, 99999);
    // document.execCommand("copy");
    // alert("copy succes!");
  };

  render() {
    const { handleEditeShow, handleDeleteShow } = this.props;

    return (
      <tr>
        <td>
          <div className="d-flex flex-row bd-highlight">
            <div className="p-2 bd-highlight">
              <span>23</span>
            </div>
          </div>
        </td>
        <td>
          <div className="d-flex flex-row bd-highlight">
            <div className="p-2 bd-highlight">
              <span>Gerente</span>
            </div>
          </div>
        </td>
        <td>
          <div className="d-flex flex-row bd-highlight">
            <div className="p-2 bd-highlight">
              <span>Gerente@gmail.com</span>
            </div>
          </div>
        </td>
        <td>
          <div className="d-flex flex-row bd-highlight">
            <div className="p-2 bd-highlight">
              <span>3</span>
            </div>
          </div>
        </td>
        <td>
          <div className="d-flex flex-row bd-highlight">
            <div className="p-2 bd-highlight">
              <span>Sim</span>
            </div>
          </div>
        </td>
        <td>
          <div className="d-flex flex-row bd-highlight">
            <div className="p-2 bd-highlight">
              <span>15/05 22:53</span>
            </div>
          </div>
        </td>
        <td>
          <div className="d-flex flex-row bd-highlight">
            <div className="p-2 bd-highlight">
              <span>15/05 22:53</span>
            </div>
          </div>
        </td>
        <td>
          <div className="d-flex flex-row bd-highlight">
            <div onClick={this.myCopy} className="p-2 bd-highlight">
              <i className="fas fa-copy"></i>
            </div>
            <div
              onClick={() => {
                handleDeleteShow();
              }}
              className="p-2 bd-highlight"
            >
              <i className="fas fa-trash"></i>
            </div>
            <div
              onClick={() => {
                handleEditeShow();
              }}
              className="p-2 bd-highlight"
            >
              <i className="fas fa-edit"></i>
            </div>
          </div>
        </td>
      </tr>
    );
  }
}
