import React, { Component } from "react";

import Navbar from "../../components/Navbar";
import MainSidebar from "../../components/MainSidebar";
import ContentWrapper from "../../components/ContentWrapper";
import Footer from "../../components/Footer";

import Form from "../../components/Travas/form";

export default class TravasScreen extends Component {
  componentDidMount() {
    document.body.className = "sidebar-mini layout-fixed";
  }
  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <MainSidebar activeMenu={{ activeTravas: "active" }} />
        <ContentWrapper>
          <div className="col-sm-12 pb-5">
            <Form />
          </div>
        </ContentWrapper>
        <Footer />
      </div>
    );
  }
}
