import React, { Component } from "react";
import { browserHistory } from "react-router-3";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-3";


import {
  MDBNavbar,
  MDBNavbarBrand,
  NavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer
} from "mdbreact";

class TodoForm extends Component {
  RegistrarPresupuesto = e => {
    browserHistory.push("/vista/registrarPresupuesto");
    // console.log("Vista nueva");
    e.preventDefault();
  };
  ModuloPresupuesto = e => {
    browserHistory.push("/vista/moduloPresupuesto");
    // console.log("Vista nueva");
    e.preventDefault();
  };

  RegistrarEgresos = e => {
    browserHistory.push("/vista/registrarEgresos");
    // console.log("Vista nueva");
    e.preventDefault();
  };

  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  };

  render() {
    return (
      <div className="text-center">
        <MDBNavbar style={{ marginTop: "20px" }} light>
          <MDBContainer>
            <MDBNavbarBrand>Registrar Presupuesto</MDBNavbarBrand>
            <MDBNavbarToggler
              onClick={this.toggleCollapse("navbarCollapse1")}
            />
            <MDBCollapse
              id="navbarCollapse1"
              isOpen={this.state.collapseID}
              navbar
            >
              <NavbarNav className="columna">
                <MDBNavItem active />
                <Link onClick={this.ModuloPresupuesto} className="nav" href="">
                  Módulo Presupuesto
                </Link>
                <MDBNavItem />
                <Link onClick={this.RegistrarEgresos} className="nav" href="">
                  Registrar Egresos{" "}
                </Link>
                <MDBNavItem />
                <Link className="nav">Registrar Ingresos</Link>
              </NavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>

        <hr />

        <div className="container">
          <div className="card-reg">
            <button
              type="button"
              className="btn-reg btn-primary"
              onClick={this.RegistrarEgresos}
            >
              REGISTRAR EGRESOS{" "}
            </button>

            <button type="button" className="btn-reg btn-primary">
              REGISTRAR INGRESOS{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoForm;
