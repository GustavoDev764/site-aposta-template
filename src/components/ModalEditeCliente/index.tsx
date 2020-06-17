import React, { Component } from "react";

import { Modal, Button, Col, Row, Container } from "react-bootstrap";

interface StateProps {}
interface DispatchProps {}
interface OwnProps {
  show: Boolean;
  handleClose: Function;
}

type Props = StateProps & DispatchProps & OwnProps;

export default class ModalEditeCliente extends Component<Props> {
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
                  <label htmlFor="carteira">Carteira:</label>
                  <input
                    type="text"
                    value={"R$ 150,00"}
                    className="form-control"
                    id="carteira"
                    disabled={true}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={6} sm={6}>
                <div className="form-group">
                  <label htmlFor="ativo">Ação na Carteira:</label>
                  <select className="form-control" id="ativo">
                    <option>Não Altera</option>
                    <option>Adiciona</option>
                    <option>Retira</option>
                  </select>
                </div>
              </Col>
              <Col xs={6} md={6} sm={6}>
                <div className="form-group">
                  <label htmlFor="vlcarteira">Digite o valor:</label>
                  <input type="text" className="form-control" id="vlcarteira" />
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
