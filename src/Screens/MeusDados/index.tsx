import React, { Component } from "react";

import Navbar from "../../components/Navbar";
import MainSidebar from "../../components/MainSidebar";
import ContentWrapper from "../../components/ContentWrapper";
import Footer from "../../components/Footer";

export default class MeuDadosScreen extends Component {
  componentDidMount() {
    document.body.className = "sidebar-mini layout-fixed";
  }
  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <MainSidebar activeMenu={{ activeMeuDados: "active" }} />
        <ContentWrapper>
          <div className="col-sm-12">
            <form>
              <div className="col-sm-12 row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input
                      type="text"
                      id={"name"}
                      className="form-control"
                      placeholder="Enter email"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id={"email"}
                      className="form-control"
                      placeholder="Enter email"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="senha">Senha</label>
                    <input
                      type="password"
                      id={"senha"}
                      className="form-control"
                      placeholder="Digite a senha"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="pwd2">Confirma Senha</label>
                    <input
                      type="password"
                      id={"pwd2"}
                      className="form-control"
                      placeholder="Confirme a senha"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="telfone">Telefone:</label>
                    <input
                      type="text"
                      id={"telfone"}
                      className="form-control"
                      placeholder="Digite o Telfone"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="endereco">Endereço:</label>
                    <input
                      type="text"
                      id={"endereco"}
                      className="form-control"
                      placeholder="Digite o Endereço"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="myfotoprofile">Foto Perfil</label>
                    <div className="input-group">
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="myfotoprofile"
                        />
                        <label
                          className="custom-file-label"
                          htmlFor="myfotoprofile"
                        >
                          Upload File
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group pt-2">
                    <p className="mt-4 col-sm-12 btn btn-primary">Salvar</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </ContentWrapper>
        <Footer />
      </div>
    );
  }
}
