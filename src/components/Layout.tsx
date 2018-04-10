import * as React from "react";
import styled from "styled-components";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Header } from "./Header";

export class Layout extends React.Component {
  public render() {
    return (
      <div className="app-container">
        <Header/>
        <div className="app-content">{this.props.children}</div>
      </div>
    );
  }
}