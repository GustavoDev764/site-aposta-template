import React, { Component } from "react";

import Navbar from "../../components/Navbar";
import MainSidebar from "../../components/MainSidebar";
import ContentWrapper from "../../components/ContentWrapper";
import Footer from "../../components/Footer";

import MiniBox from "../../components/MiniBox";
import CaixaTable from "../../components/CaixaTable";
import ItemTable from "../../components/CaixaTable/itemTable";
import FormBuscaCaixa from "../../components/FormBuscaCaixa";

export default class CaixaGerenScreen extends Component {
  componentDidMount() {
    document.body.className = "sidebar-mini layout-fixed";
  }
  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <MainSidebar
          activeMenu={{
            activeCaixaGerente: "active",
            menuOpen: "menu-open",
          }}
        />
        <ContentWrapper>
          <div className="col-sm-12">
            <div className="row">
              <MiniBox title={"Entradas"} total={"113"} value={"2.112,00"} />
              <MiniBox title={"En. Aberto"} total={"24"} value={"952,00"} />
              <MiniBox title={"En. Premiadas"} total={"3"} value={"75,00"} />
              <MiniBox title={"En. Perdidas"} total={"86"} value={"1.085,00"} />
              <MiniBox title={"Saidas"} value={"348,07"} />
              <MiniBox title={"Comissão"} value={"75,00"} />
              <MiniBox title={"Com. Gerente"} value={"0,00"} />
              <MiniBox title={"Líquido"} succes value={"1.498,13"} />
            </div>

            <FormBuscaCaixa nameUsers="Gerente" />

            <div className="col-sm-12">
              <CaixaTable>
                <ItemTable />
                <ItemTable />
                <ItemTable />
                <ItemTable />
                <ItemTable />
                <ItemTable />
                <ItemTable />
                <ItemTable />
                <ItemTable />
                <ItemTable />
                <ItemTable />
                <ItemTable />
                <ItemTable />
                <ItemTable />
                <ItemTable />
              </CaixaTable>
            </div>
          </div>
        </ContentWrapper>
        <Footer />
      </div>
    );
  }
}
