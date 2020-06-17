import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { RoutesWeb } from "./createroutes";
import { Params } from "./params";

//import Routes
import DashboardScreen from "../Screens/Dashboard";
import LoginScreen from "../Screens/Login";
import CaixaGerenScreen from "../Screens/CaixaGerente";
import CaixaVendedorScreen from "../Screens/CaixaVendedor";
import UserGerenteScreen from "../Screens/UserGerente";
import UserVendedorScreen from "../Screens/UserVendedor";
import UserClienteScreen from "../Screens/UserCliente";
import ListaDeJogosScreen from "../Screens/ListaDeJogos";
import ListaDeApostaScreen from "../Screens/ListaDeAposta";
import TravasScreen from "../Screens/Travas";
import AlteraCotacaoScreen from "../Screens/AlteraCotacao";
import CampeonatosScreen from "../Screens/Campeonatos";
import MeuDadosScreen from "../Screens/MeusDados";
import SairScreen from "../Screens/Sair";

export default class Routers extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={"/"} exact component={LoginScreen} />

          <Route path={RoutesWeb.LOGIN} exact component={LoginScreen} />

          <Route
            path={RoutesWeb.AUTH_DASHBOARD}
            exact
            component={DashboardScreen}
          />

          <Route
            path={RoutesWeb.AUTH_CAIXA_GERENTE}
            exact
            component={CaixaGerenScreen}
          />

          <Route
            path={RoutesWeb.AUTH_CAIXA_VENDEDOR}
            exact
            component={CaixaVendedorScreen}
          />

          <Route
            path={RoutesWeb.AUTH_USERS_GERENTE}
            exact
            component={UserGerenteScreen}
          />

          <Route
            path={RoutesWeb.AUTH_USERS_VENDEDOR}
            exact
            component={UserVendedorScreen}
          />

          <Route
            path={RoutesWeb.AUTH_USERS_CLIENTE}
            exact
            component={UserClienteScreen}
          />
          <Route
            path={RoutesWeb.AUTH_LISTA_JOGOS}
            exact
            component={ListaDeJogosScreen}
          />

          <Route
            path={RoutesWeb.AUTH_LISTA_APOSTA}
            exact
            component={ListaDeApostaScreen}
          />

          <Route path={RoutesWeb.AUTH_TRAVAS} exact component={TravasScreen} />

          <Route
            path={RoutesWeb.AUTH_ALTERA_COTACAO}
            exact
            component={AlteraCotacaoScreen}
          />

          <Route
            path={RoutesWeb.AUTH_CAMPEONATOS}
            exact
            component={CampeonatosScreen}
          />

          <Route
            path={RoutesWeb.AUTH_MEUS_DADOS}
            exact
            component={MeuDadosScreen}
          />

          <Route path={RoutesWeb.AUTH_SAIR} exact component={SairScreen} />
        </Switch>
      </Router>
    );
  }
}
