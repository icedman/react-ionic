import React, { Component } from 'react';
import { HashRouter, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes, { getRouteLayout } from './routes';
import Layout from './layouts';
import Stores from './stores';

class _AppLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            layout: null
        };
    }

    componentDidMount() {
        this.updateLayout();
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.updateLayout();
        }
    }

    updateLayout() {
        this.setState({ layout: getRouteLayout(this.props.location.pathname) });
    }

    render() {
        return (
            <Layout layout={this.state.layout} content={(
                <Routes></Routes>
            )} />
        );
    }
}

const AppLayout = withRouter(_AppLayout);

export default class App extends Component {
    render() {
        return (
            <Provider store={Stores}>
                <HashRouter>
                    <AppLayout/>
                </HashRouter>
            </Provider>
        );
    }
}