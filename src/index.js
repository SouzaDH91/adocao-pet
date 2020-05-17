import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './index.css';
import './components/App.css';

import App from './components/App';
import Login from './components/Auth/Login';
import Cadastrar from './components/Auth/Cadastrar';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
    uri: 'http://localhost:3333/graphql'
});

const Root = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={App} />
            <Route path="/login" component={Login} />
            <Route path="/cadastrar" component={Cadastrar} />
            <Redirect to="/" />
        </Switch>
    </Router>
);

ReactDOM.render(
    <ApolloProvider client={client}>
        <Root />
    </ApolloProvider>,
    document.getElementById('root')
);


