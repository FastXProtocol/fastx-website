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
                <img src="/images/fastx_logo_text.svg" alt="FastX Protocol" />
            </a>
            <div className="links-container">
                <Link href="#" to="slogan" spy={true} smooth={true} duration={500}>Home</Link>
                <Link href="#" to="tech" spy={true} smooth={true} duration={500}>How It Works</Link>
                <Link href="#" to="token" spy={true} smooth={true} duration={500}>FEX Token</Link>
            </div>
            </div>
        </nav>
    );
  }
}