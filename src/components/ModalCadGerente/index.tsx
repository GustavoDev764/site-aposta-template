import React, { Component } from "react";

import { Modal, Button, Col, Row, Container } from "react-bootstrap";

interface StateProps {}
interface DispatchProps {}
interface OwnProps {
  show: Boolean;
  handleClose: Function;
}

type Props = StateProps & DispatchProps & OwnProps;

export default class ModalCadGerente extends Component<Props> {
  render() {
    const { show, handleClose } = this.props;

    return (
      <Modal
        size="lg"
        show={show}
        onHide={() => {
          handleClose();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Cadastro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={6} md={6} sm={6}>
                <div className="form-group">
                  <label htmlFor="name">Nome:</label>
                  <input type="text" className="form-control" id="name" />
                </div>
              </Col>
              <Col xs={6} md={6} sm={6}>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="text" className="form-control" id="email" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={6} sm={6}>
                <div className="form-group">
                  <label htmlFor="pwd">Senha:</label>
                  <input type="text" className="form-control" id="pwd" />
                </div>
              </Col>
              <Col xs={6} md={6} sm={6}>
                <div className="form-group">
                  <label htmlFor="pwdtwo">Confirma Senha:</label>
                  <input type="text" className="form-control" id="pwdtwo" />
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              handleClose();
            }}
          >
            Cancela
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
            }}
          >
            Cadastra
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
