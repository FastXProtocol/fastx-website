import * as React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
// import { IndexPage } from "./components/IndexPage";
import { Layout } from "./components/Layout";
import { reducer as formReducer } from "redux-form";
import { Provider } from 'react-redux';
import { createStore, combineReducers } from "redux";
import { LandingPage } from "./pages/LandingPage/LandingPage";

const reduxDevtoolsMiddleware =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  combineReducers(
    { form: formReducer }
  ),
  reduxDevtoolsMiddleware
);

const Routes = () => (
  <div>
    <Route exact={true} path="/" component={LandingPage} />
  </div>
);

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Routes />
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
