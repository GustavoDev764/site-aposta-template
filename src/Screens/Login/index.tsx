import React, { Component } from "react";

import MsgDanger from "../../components/Login/msgdanger";
import MsgSuccess from "../../components/Login/msgsuccess";

export default class LoginScreen extends Component {
  componentDidMount() {
    document.body.className = "login-page";
  }
  render() {
    return (
      <div className="center d-flex justify-content-center align-items-center">
        <div className="p-2 bd-highlight">
          <div className="login-box">
            <div className="card">
              <div className="card-body login-card-body">
                <p className="login-box-msg">
                  <img src="https://demo.rocketsistemas.com.br/img/logo/bancademo_logo.png" />
                </p>
                <p>{/* Messega de erro ou sucesso! */}</p>
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pwd">Senha:</label>
                    <input type="password" className="form-control" id="pwd" />
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <p className="btn btn-primary btn-block">Entra</p>
                    </div>
                  </div>
                </form>
                <div className="social-auth-links text-center mb-3">
                  <p>- OU -</p>
                  <p className="btn btn-block btn-danger">
                    <i className="fab fa-google mr-3"></i>
                    Login com o Gmail
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
