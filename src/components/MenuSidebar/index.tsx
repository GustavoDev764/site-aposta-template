import React, { Component } from "react";
import { Link } from "react-router-dom";

import { RoutesWeb } from "../../routers/createroutes";
import { activeMenu } from "./menuActive";

interface StateProps {}
interface DispatchProps {}
interface OwnProps {
  activeMenu: activeMenu;
}

type Props = StateProps & DispatchProps & OwnProps;

export default class MenuSidebar extends Component<Props> {
  render() {
    const { activeMenu } = this.props;

    return (
      <nav className="mt-2">
        <ul
          className="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <li className="nav-item ">
            <Link
              to={RoutesWeb.AUTH_DASHBOARD}
              className={`nav-link ${activeMenu?.activeDashboard}`}
            >
              <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>Dashboard</p>
            </Link>
          </li>
          <li className={`nav-item has-treeview ${activeMenu.menuOpen}`}>
            <a href={"#"} className={`nav-link ${activeMenu.activeMenu}`}>
              <i className="nav-icon fas fa-cash-register"></i>
              <p>
                Caixa
                <i className="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link
                  to={RoutesWeb.AUTH_CAIXA_GERENTE}
                  className={`nav-link ${activeMenu?.activeCaixaGerente}`}
                >
                  <i className="far fa-circle nav-icon"></i>
                  <p>Caixa do Gerente</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={RoutesWeb.AUTH_CAIXA_VENDEDOR}
                  className={`nav-link ${activeMenu.activeCaixaVendedo}`}
                >
                  <i className="far fa-circle nav-icon"></i>
                  <p>Caixa do Vendendor</p>
                </Link>
              </li>
            </ul>
          </li>
          <li className={`nav-item has-treeview ${activeMenu.menuOpen}`}>
            <a href="#" className={`nav-link ${activeMenu.activeMenu}`}>
              <i className="nav-icon fas fa-users"></i>
              <p>
                Usuarios
                <i className="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link
                  to={RoutesWeb.AUTH_USERS_GERENTE}
                  className={`nav-link ${activeMenu.activeUserGerente}`}
                >
                  <i className="far fa-circle nav-icon"></i>
                  <p>Gerente</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={RoutesWeb.AUTH_USERS_VENDEDOR}
                  className={`nav-link ${activeMenu.activeUserVendedor}`}
                >
                  <i className="far fa-circle nav-icon"></i>
                  <p>Vendedor</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={RoutesWeb.AUTH_USERS_CLIENTE}
                  className={`nav-link ${activeMenu.activeUserCliente}`}
                >
                  <i className="far fa-circle nav-icon"></i>
                  <p>Cliente (Apostado)</p>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item ">
            <Link
              to={RoutesWeb.AUTH_LISTA_JOGOS}
              className={`nav-link ${activeMenu.activeListaDeJogos}`}
            >
              <i className="nav-icon fas fa-gamepad"></i>
              <p>Lista de Jogos</p>
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              to={RoutesWeb.AUTH_LISTA_APOSTA}
              className={`nav-link ${activeMenu.activeListaDeAposta}`}
            >
              <i className="nav-icon fas fa-wallet"></i>
              <p>Lista de Apostas</p>
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              to={RoutesWeb.AUTH_TRAVAS}
              className={`nav-link ${activeMenu.activeTravas}`}
            >
              <i className="nav-icon fas fa-lock"></i>
              <p>Travas</p>
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              to={RoutesWeb.AUTH_ALTERA_COTACAO}
              className={`nav-link ${activeMenu.activeAlteraCotacao}`}
            >
              <i className="nav-icon fas fa-exchange-alt"></i>
              <p>Altera Cotação</p>
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              to={RoutesWeb.AUTH_CAMPEONATOS}
              className={`nav-link ${activeMenu.activeCampeonato}`}
            >
              <i className="nav-icon fas fa-trophy"></i>
              <p>Campeonatos</p>
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              to={RoutesWeb.AUTH_MEUS_DADOS}
              className={`nav-link ${activeMenu.activeMeuDados}`}
            >
              <i className="nav-icon fas fa-user-edit"></i>
              <p>Meus Dados</p>
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              to={RoutesWeb.AUTH_SAIR}
              className={`nav-link ${activeMenu.activeSair}`}
            >
              <i className="nav-icon fas fa-sign-out-alt"></i>
              <p>Sair</p>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
