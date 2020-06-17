import React, { Component } from "react";

import { Modal, Button } from "react-bootstrap";

interface StateProps {}
interface DispatchProps {}
interface OwnProps {
  show: Boolean;
  handleClose: Function;
}

type Props = StateProps & DispatchProps & OwnProps;

export default class ModalDeleteGerente extends Component<Props> {
  render() {
    const { show, handleClose } = this.props;

    return (
      <Modal
        show={show}
        onHide={() => {
          handleClose();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Editar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Tem certeza que dejesa deletar o usuário user_name as apostas dele
            serão apagadas, isso refletirá no relatório do caixa?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <div className="col-sm-12 d-flex justify-content-between bd-highlight mb-3">
            <div className="p-2 bd-highlight">
              <Button
                variant="danger"
                onClick={() => {
                  handleClose();
                }}
              >
                Sim
              </Button>
            </div>
            <div className="p-2 bd-highlight">
              <Button
                variant="primary"
                onClick={() => {
                  handleClose();
                }}
              >
                Não
              </Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }
}
