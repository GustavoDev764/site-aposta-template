import React, { Component } from "react";

import { Modal, Button, Col, Row, Container } from "react-bootstrap";

interface StateProps {}
interface DispatchProps {}
interface OwnProps {
  show: Boolean;
  handleClose: Function;
}

type Props = StateProps & DispatchProps & OwnProps;

export default class ModalEditeVendedor extends Component<Props> {
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
              <Col xs={4} md={4} sm={4}>
                <div className="form-group">
                  <label htmlFor="name">Nome:</label>
                  <input type="text" className="form-control" id="name" />
                </div>
              </Col>
              <Col xs={4} md={4} sm={4}>
                <div className="form-group">
                  <label htmlFor="tel">Telefone:</label>
                  <input type="text" className="form-control" id="tel" />
                </div>
              </Col>
              <Col xs={4} md={4} sm={4}>
                <div className="form-group">
                  <label htmlFor="endereco">Endereço:</label>
                  <input type="text" className="form-control" id="endereco" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={4} md={4} sm={4}>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="text" className="form-control" id="email" />
                </div>
              </Col>
              <Col xs={4} md={4} sm={4}>
                <div className="form-group">
                  <label htmlFor="pwd">Senha:</label>
                  <input type="text" className="form-control" id="pwd" />
                </div>
              </Col>
              <Col xs={4} md={4} sm={4}>
                <div className="form-group">
                  <label htmlFor="pwdtwo">Confirma Senha:</label>
                  <input type="text" className="form-control" id="pwdtwo" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={4} md={4} sm={4}>
                <div className="form-group">
                  <label htmlFor="cm1">Comissão 1 jogo:</label>
                  <input type="text" className="form-control" id="cm1" />
                </div>
              </Col>
              <Col xs={4} md={4} sm={4}>
                <div className="form-group">
                  <label htmlFor="cm2">Comissão 2 jogo:</label>
                  <input type="text" className="form-control" id="cm2" />
                </div>
              </Col>
              <Col xs={4} md={4} sm={4}>
                <div className="form-group">
                  <label htmlFor="cm2">Comissão 3 jogo:</label>
                  <input type="text" className="form-control" id="cm3" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={3} md={3} sm={3}>
                <div className="form-group">
                  <label htmlFor="cmp">Comissão de premio:</label>
                  <input type="text" className="form-control" id="cmp" />
                </div>
              </Col>
              <Col xs={3} md={3} sm={3}>
                <div className="form-group">
                  <label htmlFor="slgerente">Seleciona o Gerente:</label>
                  <select className="form-control" id="ativo">
                    <option>Carlos</option>
                    <option>Pedro</option>
                  </select>
                </div>
              </Col>
              <Col xs={3} md={3} sm={3}>
                <div className="form-group">
                  <label htmlFor="lmtgeral">Limite Geral:</label>
                  <input type="text" className="form-control" id="lmtgeral" />
                </div>
              </Col>
              <Col xs={3} md={3} sm={3}>
                <div className="form-group">
                  <label htmlFor="lmtsimples">Limite Simples:</label>
                  <input type="text" className="form-control" id="lmtsimples" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={4} md={4} sm={4}>
                <div className="form-group">
                  <label htmlFor="ativo">Ativo:</label>
                  <select className="form-control" id="ativo">
                    <option>Sim</option>
                    <option>Não</option>
                  </select>
                </div>
              </Col>
              <Col xs={4} md={4} sm={4}>
                <div className="form-group">
                  <label htmlFor="aovivo">Ao Vivo:</label>
                  <select className="form-control" id="aovivo">
                    <option>Sim</option>
                    <option>Não</option>
                  </select>
                </div>
              </Col>
              <Col xs={4} md={4} sm={4}>
                <div className="form-group">
                  <label htmlFor="credito">Créditos:</label>
                  <select className="form-control" id="credito">
                    <option>Sim</option>
                    <option>Não</option>
                  </select>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={4} md={4} sm={4}>
                <div className="form-group">
                  <label htmlFor="segvia">Segunda vía:</label>
                  <select className="form-control" id="segvia">
                    <option>Sim</option>
                    <option>Não</option>
                  </select>
                </div>
              </Col>
              <Col xs={4} md={4} sm={4}>
                <div className="form-group">
                  <label htmlFor="cancelaaposta">Cancelar aposta:</label>
                  <select className="form-control" id="cancelaaposta">
                    <option>Sim</option>
                    <option>Não</option>
                  </select>
                </div>
              </Col>
              <Col xs={4} md={4} sm={4}>
                <div className="form-group">
                  <label htmlFor="realizaposta">Realizar aposta:</label>
                  <select className="form-control" id="realizaposta">
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
