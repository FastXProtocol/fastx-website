import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/Hero.js";
import StatusQuo from "components/StatusQuo.js";
import WhatsFastX from "components/WhatsFastX.js";
import HowItWorks from "components/HowItWorks.js";
import ContactUs from "components/ContactUs.js";
import Footer from "components/Footer.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <AnimationRevealPage disabled>
            <Hero />
            <StatusQuo />
            <WhatsFastX />
            <HowItWorks />
            <ContactUs />
            <Footer />
          </AnimationRevealPage>
        </Route>
      </Switch>
    </Router>
  );
}
