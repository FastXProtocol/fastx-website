import * as React from "react";
import { compose } from "recompose";
import { withRouter } from "react-router";
import * as _ from "lodash";
import * as queryString from "query-string";
import { Field, reduxForm } from "redux-form";

const Success = ({ userId }) => (
  <div>
    <h3> Please confirm your email </h3>
    <p>We've sent you a confirmation email. Please click on the provided link </p>
    <h3> Share this link with your friends! </h3>
    {`${window.location.host}/?referer=${userId}`}
  </div>
);

interface IndexPagePresentationalProps {
  formProps: any;
  createUser: (variables: any) => any;
  sendEmail: (variables: any) => any;
}

interface IndexPagePresentationalState {
  user: { data: any };
  email: string;
  address: string;
  isLoading: boolean;
  hasSucceeded: boolean;
  err: {};
  referer: string;
}

class IndexPagePresentational extends React.Component<IndexPagePresentationalProps, IndexPagePresentationalState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      user: { data: {} },
      email: "",
      address: "",
      isLoading: false,
      hasSucceeded: false,
      err: false,
      referer: queryString.parse(location.search).referer, // this.props.location.query.referer
    };
    this.handleCreateUser = this.handleCreateUser.bind(this);
  }

  public handleCreateUser() {
    this.setState({ isLoading: true });
    let variables: any = { email: this.state.email, address: this.state.address };
    if (!_.isEmpty(this.state.referer)) {
      variables.refererId = this.state.referer;
    }
    console.log(variables);
    this.props.createUser({ variables })
      .then((user: any) => {
        this.setState({ isLoading: false, hasSucceeded: true, user: user.data.createUser });
      }).catch((err: {}) => {
        this.setState({ isLoading: false, err });
      });
  }

  public render() {
    console.log("props", this.props);
    const { pristine, reset, submitting } = this.props.formProps;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            {this.state.hasSucceeded &&
              <Success userId={_.get(this, "state.user.id")} />
            }
            {!this.state.hasSucceeded && this.state.err &&
              <h3> {this.state.err.toString()} </h3>
            }
            {!this.state.hasSucceeded && (
              <div>
                <form onSubmit={this.handleCreateUser}>
                  <label htmlFor="email">Email</label>
                  <Field
                    name="email"
                    component="input"
                    type="text"
                    placeholder="email@email.com"
                    className="form-control"
                  />
                  <label htmlFor="email">Ethereum Address</label>
                  <Field
                    name="address"
                    component="input"
                    type="text"
                    placeholder="0x9acf9283"
                    className="form-control"
                  />
                  <button type="submit" disabled={pristine || submitting}>
                    Submit
                  </button>
                </form>

                <form>
                  <div className="form-group">
                    <label htmlFor="title">Email</label>
                    <input
                      type="text"
                      value={this.state.email}
                      onChange={(e) => { this.setState({ email: e.target.value }); }}
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      value={this.state.address}
                      onChange={(e) => { this.setState({ address: e.target.value }); }}
                      className="form-control"
                      id="address"
                      placeholder="Address"
                    />
                  </div>
                </form>
                <a
                  style={{ marginRight: 10 }}
                  className="btn btn-primary"
                  onClick={this.handleCreateUser}
                >
                  {this.state.isLoading ? "Submitting..." : "Submit"}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

// const SEND_EMAIL_MUTATION = gql`
// mutation sendMail($email: String!, $subject: String!, $body: String!) {
//   sendMail(email: $email, subject: $subject, body: $body) {
//     success
//   }
// }
// `;

// const CREATE_USER_MUTATION = gql`
// mutation createUser($email: String!, $address: String!, $refererId: ID) {
//   createUser(email: $email, address: $address, refererId: $refererId) {
//     id
//     email
//     address
//   }
// }
// `;

const IndexPage = compose(
//   graphql(CREATE_USER_MUTATION, { name: "createUser" }),
//   graphql(SEND_EMAIL_MUTATION, { name: "sendEmail" }),
  reduxForm({ propNamespace: "formProps", form: "signupForm" }),
  withRouter
)(IndexPagePresentational);

export { IndexPage };