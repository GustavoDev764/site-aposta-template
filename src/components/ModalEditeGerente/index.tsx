import React, { Component } from "react";

import { Modal, Button, Col, Row, Container } from "react-bootstrap";

interface StateProps {}
interface DispatchProps {}
interface OwnProps {
  show: Boolean;
  handleClose: Function;
}

type Props = StateProps & DispatchProps & OwnProps;

export default class ModalEditeGerente extends Component<Props> {
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
          <Modal.Title>Editar</Modal.Title>
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
            <Row>
              <Col xs={6} md={6} sm={6}>
                <div className="form-group">
                  <label htmlFor="tel">Telefone:</label>
                  <input type="text" className="form-control" id="tel" />
                </div>
              </Col>
              <Col xs={6} md={6} sm={6}>
                <div className="form-group">
                  <label htmlFor="endereco">Endereço:</label>
                  <input type="text" className="form-control" id="endereco" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={6} sm={6}>
                <div className="form-group">
                  <label htmlFor="ativo">Ativo:</label>
                  <select className="form-control" id="ativo">
                    <option>Sim</option>
                    <option>Não</option>
                  </select>
                </div>
              </Col>
              <Col xs={6} md={6} sm={6}>
                <div className="form-group">
                  <label htmlFor="alteracmven">
                    Alterar comissão Vendedor:
                  </label>
                  <select className="form-control" id="alteracmven">
                    <option>Sim</option>
                    <option>Não</option>
                  </select>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={6} sm={6}>
                <div className="form-group">
                  <label htmlFor="comissao">Comissão:</label>
                  <input type="number" className="form-control" id="comissao" />
                </div>
              </Col>
              <Col xs={6} md={6} sm={6}>
                <div className="form-group">
                  <label htmlFor="cancelaaposta">Cancelar aposta:</label>
                  <select className="form-control" id="cancelaaposta">
                    <option>Sim</option>
                    <option>Não</option>
                  </select>
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
            Salva Alterações
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
