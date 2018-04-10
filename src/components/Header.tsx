import * as React from "react";
import { Link } from 'react-scroll';
import styled from "styled-components";

const FASTX_WEBSITE = "http://www.fastx.pro/";

export class Header extends React.Component {
  public render() {
    return (
        <nav>
            <div className="container">
            <a href={`${FASTX_WEBSITE}`} target="_blank" className="logo">
                <img src="/images/fx-logo.svg" alt="FastX Protocol" />
            </a>
            <div className="links-container">
                <a href={`${FASTX_WEBSITE}`}>Home</a>
                <a href=""><Link to="tech" spy={true} smooth={true} duration={500}>How It Works</Link></a>
                <a href="mailto:hello@fastx.pro" className="email-link">hello@fastx.pro</a>
                <a href="https://twitter.com/FastXProtocol" target="_blank"><div className="social-icon twitter"/></a>
                <a href="https://github.com/FastXProtocol" target="_blank"><div className="social-icon github-social"/></a>
                <a href="mailto:hello@fastx.pro"><div className="social-icon email"/></a>
            </div>
            </div>
        </nav>
    );
  }
}