import React, { Component } from "react";

import Navbar from "../../components/Navbar";
import MainSidebar from "../../components/MainSidebar";
import ContentWrapper from "../../components/ContentWrapper";
import Footer from "../../components/Footer";

import Box from "../../components/Box";
import Graph from "../../components/Graph";

export default class DashboardScreen extends Component {
  componentDidMount() {
    document.body.className = "sidebar-mini layout-fixed";
  }
  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <MainSidebar activeMenu={{ activeDashboard: "active" }} />
        <ContentWrapper>
          <div className="col-sm-12">
            <h3>APURADO DO DIA</h3>
          </div>
          <div className="row">
            <Box
              classItemBox={"col-lg-3 col-6"}
              classbox={"small-box bg-info"}
              title={"1.173,00"}
              name={"Entradas"}
              urlLink={""}
              textLink={"Mais Informação"}
              classLink={"small-box-footer"}
            />

            <Box
              classItemBox={"col-lg-3 col-6"}
              classbox={"small-box bg-warning"}
              title={"942,00"}
              name={"Entradas em aberto"}
              urlLink={""}
              textLink={"Mais Informação"}
              classLink={"small-box-footer"}
            />

            <Box
              classItemBox={"col-lg-3 col-6"}
              classbox={"small-box bg-success"}
              title={"1.173,00"}
              name={"Saldo Líquido"}
              urlLink={""}
              textLink={"Mais Informação"}
              classLink={"small-box-footer"}
            />

            <Box
              classItemBox={"col-lg-3 col-6"}
              classbox={"small-box bg-danger"}
              title={"231,00"}
              name={"Entradas perdidas"}
              urlLink={""}
              textLink={"Mais Informação"}
              classLink={"small-box-footer"}
            />

            <div className="container">
              <Graph />
            </div>
          </div>
        </ContentWrapper>
        <Footer />
      </div>
    );
  }
}
