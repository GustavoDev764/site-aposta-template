import React, { Component } from "react";

import Navbar from "../../components/Navbar";
import MainSidebar from "../../components/MainSidebar";
import ContentWrapper from "../../components/ContentWrapper";
import Footer from "../../components/Footer";

import UserClienteTable from "../../components/UserClienteTable";
import ItemTable from "../../components/UserClienteTable/itemTable";
import ModalCadCliente from "../../components/ModalCadCliente";
import ModalDeleteCliente from "../../components/ModalDeleteCliente";
import ModalEditeCliente from "../../components/ModalEditeCliente";

export default class UserClienteScreen extends Component {
  componentDidMount() {
    document.body.className = "sidebar-mini layout-fixed";
  }
  state = {
    show: false,
    showdelete: false,
    showcada: false,
  };

  handleShowCad = () => {
    const { showcada } = this.state;
    this.setState({ showcada: !showcada });
  };

  handleCloseCada = () => {
    this.setState({ showcada: false });
  };

  handleShowDelete = () => {
    const { showdelete } = this.state;
    this.setState({ showdelete: !showdelete });
  };

  handleCloseDelete = () => {
    this.setState({ showdelete: false });
  };

  handleShow = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    const { show, showdelete, showcada } = this.state;
    return (
      <div className="wrapper">
        <Navbar />
        <MainSidebar
          activeMenu={{ activeUserCliente: "active", menuOpen: "menu-open" }}
        />
        <ContentWrapper>
          <ModalEditeCliente handleClose={this.handleClose} show={show} />
          <ModalDeleteCliente
            handleClose={this.handleCloseDelete}
            show={showdelete}
          />
          <ModalCadCliente handleClose={this.handleCloseCada} show={showcada} />
          <div className="col-sm-12">
            <div className="container p-3">
              <div className="row">
                <div className="form-group">
                  <label htmlFor="email">Nome:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Digite o Nome"
                  />
                </div>
                <div className="form-group ml-3">
                  <p
                    onClick={this.handleShowCad}
                    style={{ marginTop: "2rem" }}
                    className="btn btn-primary form-control"
                  >
                    Novo Cadastro
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <UserClienteTable>
                <ItemTable
                  handleEditeShow={this.handleShow}
                  handleDeleteShow={this.handleShowDelete}
                />
              </UserClienteTable>
            </div>
          </div>
        </ContentWrapper>
        <Footer />
      </div>
    );
  }
}
