import React, { Component } from "react";

import { Link } from "react-router-dom";
import { RoutesWeb } from "../../routers/createroutes";

import MenuSidebar from "../MenuSidebar";
import { activeMenu } from "../MenuSidebar/menuActive";

interface StateProps {}
interface DispatchProps {}
interface OwnProps {
  activeMenu: activeMenu;
}

type Props = StateProps & DispatchProps & OwnProps;

export default class MainSidebar extends Component<Props> {
  render() {
    const { activeMenu } = this.props;

    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Link to={RoutesWeb.AUTH_DASHBOARD} className="brand-link">
          <div className="d-flex justify-content-between">
            <div className="p-2 bd-highlight">
              <img
                src="dist/img/AdminLTELogo.png"
                alt="AdminLTE Logo"
                className="brand-image img-circle elevation-3"
                style={{ opacity: 0.8 }}
              />
            </div>
            <div className="p-2 bd-highlight">
              <span className="brand-text font-weight-light mr-2">
                AdminLTE 3
              </span>
            </div>
            <div
              data-widget="pushmenu"
              className="p-2 bd-highlight icon-close-menu"
            >
              <i className="fas fa-times"></i>
            </div>
          </div>
        </Link>

        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <Link to={RoutesWeb.AUTH_MEUS_DADOS} className="d-block">
                Alexander Pierce
              </Link>
            </div>
          </div>
          <MenuSidebar activeMenu={activeMenu} />
        </div>
      </aside>
    );
  }
}

// data-widget='pushmenu'
