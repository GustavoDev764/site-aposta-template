import React, { Component } from "react";

import Navbar from "../../components/Navbar";
import MainSidebar from "../../components/MainSidebar";
import ContentWrapper from "../../components/ContentWrapper";
import Footer from "../../components/Footer";

export default class SairScreen extends Component {
  componentDidMount() {
    document.body.className = "sidebar-mini layout-fixed";
  }
  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <MainSidebar activeMenu={{ activeSair: "active" }} />
        <ContentWrapper>
          <div className="col-sm-12">
            <h1>SairScreen</h1>
          </div>
        </ContentWrapper>
        <Footer />
      </div>
    );
  }
}
