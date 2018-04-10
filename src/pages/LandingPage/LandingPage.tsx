import * as React from "react";
import * as moment from "moment";
import styled from "styled-components";
// import { graphql } from "react-apollo";
// import gql from "graphql-tag";
import { compose, withHandlers, withState } from "recompose";
import { withRouter } from "react-router";
import * as _ from "lodash";
import * as queryString from "query-string";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { email, ethereumAddress, required, emailWithoutPlus } from "../../utils/validators";
// import { CountDown } from "../../components/CountDown";
// import DocumentTitle = require("react-document-title");
// import { CopyLink } from "../../components/CopyLink";
import { Element } from 'react-scroll';
import {
  InputWrapper, InputLabel, LandingWrapper, WhiteLink,
  FieldError, Input, Heading, CountDownWrapper,
  SubHeading, DeliveryText, SignupForm, FormError,
  Button, Explanation, StyledLink,
  Panel, Column, Header, Copy, PanelImage,
  CalendarImage, TintedPanel, Footer, ConfirmEmail, LogoImage, VerticalPanel, 
  YellowButton, TopClearButton, ImageWrapper, InnerImage, BorderlessPanel, 
  DiagramImage, LargeCopy, LargeStyledItem, LargeStyledLink
} from "./LandingPageStyles";

const STRINGS = {
  tokenName: "FEX Token",
};

// const CREATE_USER_MUTATION = gql`
// mutation createUser($email: String!, $ethereumAddress: String!, $referrerId: ID) {
//   createUser(email: $email, ethereumAddress: $ethereumAddress, referrerId: $referrerId) {
//     id
//   }
// }
// `;

interface PropsType {
  formProps: any;
  newUser: any;
  match: { params: { referrerId?: string } };
  submissionError: string | undefined;
  hasSucceeded: string | undefined;
  createUser: (variables: any) => any;
}

const renderField = ({
  input,
  name,
  label,
  type,
  placeholder,
  className,
  meta: { touched, error, warning },
  }) => (
    <InputWrapper>
      <InputLabel htmlFor={name} invalid={!!(touched && error)}>{label}</InputLabel>
      <div>
        <Input {...input} placeholder={placeholder} type={type} invalid={!!(touched && error)} />
        {touched && (error && <FieldError>{error}</FieldError>)}
      </div>
    </InputWrapper>
  );

const TelegramButton = (props) => {
  const Button = props.component;
  return (
    <form method="get" action="https://t.me/joinchat/H4r43A75jNkxQPasquwwCg" target="_blank">
      <Button type="submit">Talk to us on Telegram</Button>
    </form>
  );
};

const LandingPagePresentational: React.StatelessComponent<PropsType> = (props: PropsType) => {
  const { handleSubmit, pristine, reset, submitting } = props.formProps;
  const deadline =  moment("Nov 11 23:59:00 -0800", "MMM DD hh:mm:ss Z"); 

  return (
    // <DocumentTitle title={STRINGS.tokenName}>
      <div>
        <LandingWrapper>
          {/* <TelegramButton component={TopClearButton} /> */}
          {/* <Heading>Join the Frontier</Heading> */}
          <SubHeading>An open protocol for Fast, Cheap, yet Secure Non-Fungible Token exchange on Ethereum.</SubHeading>
          {props.hasSucceeded &&
            <ConfirmEmail>Thanks for signing up! Stay tuned for our latest updates!</ConfirmEmail>
          }
          {!props.hasSucceeded &&
            <SignupForm onSubmit={handleSubmit}>
              {props.submissionError && <FormError>{props.submissionError}</FormError>} 
              <Field
                name="email"
                label="Email"
                component={renderField}
                type="text"
                validate={[required, email]}
              />
              <Button type="submit">
                {submitting ? "Submitting..." : `Subscribe Now`}
              </Button>
            </SignupForm>
          }
        </LandingWrapper>

        <Panel>
          <Column>
            <Header>The Status Quo</Header>
            <Copy>Non-fungible tokens (NFT) emulate rare, collectible items, and are perfect for games like CryptoKitties.</Copy>
            <Copy>While blockchain ensures the security and ownership of NFTs, its limited transaction throughput and costly tx fees can hardly accommodate even a single popular game.</Copy>
          </Column>
          <Column>
            <PanelImage src="/images/status_quo.png" />
          </Column>
        </Panel>

        <TintedPanel>
          <Column>
            <Header isLight={true}>What is FastX</Header>
            <Copy isLight={true}>FastX protocol allows developers to build large-scale Non-Fungible Token dApps and games without being limited by the blockchain's low throughput and costly tx fees no more!</Copy>
            <Copy isLight={true}>Running as sidechains, Trust and Security of dApps and games based on FastX is guaranteed by Ethereum blockchain.</Copy>
          </Column>
          <Column>
            <ImageWrapper>
              <InnerImage src="/images/fastx_logo_big.svg" />
            </ImageWrapper>
          </Column>
        </TintedPanel>
        <Element name="tech">
        <Panel>
          <Column>
            <LogoImage src="/images/gear.png" />
          </Column>
          <Column>
            <Header>How it works</Header>
            <Copy>Let's say, <LargeStyledLink href="https://www.cryptoalpaca.pet" target="_blank">CryptoAlpaca</LargeStyledLink> is a game running on FastX protocol.</Copy>
            <Copy>Firstly, players deposit their assets, like game props and ETH into the game.</Copy>
            <Copy>Once done with the game, players can exit by withdrawing their assets back to Ethereum.</Copy>
          </Column>
        </Panel>
        </Element>
        <BorderlessPanel>
            <DiagramImage src="/images/fastx_diagram.jpg" style={{maxWidth: "1007px", width: "100%"}}/>
        </BorderlessPanel>

        <TintedPanel>
          <Column>
            <Header isLight={true}>FEX Token</Header>
            <Copy isLight={true}>The protocol token, FEX, is intended to create financial incentives that drive all contributing parties in FastX protocol to coordinate their behaviors towards facilitating NFT tradings.</Copy>
            <Copy isLight={true}>FEX can be used for transaction fees, service provider's deposit, and decentralized governance.</Copy>
          </Column>
          <Column>
            <CalendarImage src="/images/fastx_logo_big.svg" />
          </Column>
        </TintedPanel>


        <VerticalPanel>
          <LargeCopy>Let’s build the tokenized creative economy...and have fun together!</LargeCopy>
          {/* <TelegramButton component={YellowButton} /> */}
        </VerticalPanel>

        <Footer>
          <div className="container">
          <div className="row">
          <div className="col-sm-6">
            &copy; 2018 FastX Inc.
          </div>
          <div className="col-sm-6">
             <WhiteLink href="mailto:hello@fastx.pro" target="_top"> hello@fastx.pro </WhiteLink>
          </div>
          </div>
          </div>

        </Footer>
      </div>
    // </DocumentTitle>
  );
};

const LandingPage = compose(
  withRouter,
//   graphql(CREATE_USER_MUTATION, { name:  "createUser" }),
  withState("submissionError", "setSubmissionError", undefined),
  withState("hasSucceeded", "setHasSucceeded", false),
  withState("newUser", "setNewUser", undefined),
  withHandlers({
    onSubmit: (props: any) => async ({ email }) => {
      props.setSubmissionError(undefined);
      const {referrerId} = props.match.params; // can be undefined
      try {
        // const result = await props.createUser({variables: {email, referrerId } });
        // props.setNewUser(result.data.createUser);
        props.setHasSucceeded(true);
      } catch (error) {
        props.setSubmissionError("Email is already submitted.");
      }
    },
  }),
  reduxForm({propNamespace: "formProps", form: "signupForm" }),
)(LandingPagePresentational);

export {LandingPage};
