import React, { Component, Fragment } from 'react';
import { withRouter, Route, Link } from 'react-router-dom';
import SampleRoutes from '../pages/routes.js';

import HeaderLayout from '../layouts/Header';

function prefixRoutePath(path, routes) {
    return routes.map(r => {
        r.path = (path + '/' + r.path).replace('//', '/');
        return r;
    });
}

// move this to its own file
function ListRoutes() {
    return (
        <Fragment>
            <ul>
                {
                    routes.map((route, i) => {
                        return (<li key={i}><Link to={route.path}>{route.title || route.path}</Link></li>);
                    })
                }
            </ul>
        </Fragment>
    );
}

const routes = [
    {
        path: '/',
        title: 'List Routes',
        component: ListRoutes,
        layout: HeaderLayout,
        permissions: {
            authenticated: [ 'all' ]
        }
    },
    // {
    //   path: '/page2/:q',
    //   title: 'Page 1 with query parameters',
    //   component: page1,
    //   permissions: {
    //     authenticated: [ 'all' ]
    //   }
    // },
    ...SampleRoutes
    // ...prefixRoutePath('/pages', SampleRoutes),
    // ...prefixRoutePath('/test', CrudRoutes)
];

export function getRouteLayout(path) {
    for(let i=0; i<routes.length; i++) {
        let p = (routes[i].path + ':').split(':')[0];
        if (p.startsWith(path)) {
            return routes[i].layout;
        }
    }
    return null;
}

class NoAccess extends Component {
    render() {
        this.props.history.push('/login');
        return (<h2>No Access</h2>);
    }
}

class Routes extends Component {
    render() {
        let filteredRoutes = routes;
        return (
            <Fragment>
                {
                    routes.map((route, i) => {
                        return (<Route exact key={i} {...route} />);
                    })
                }
            </Fragment>
        );
    }
}

export default Routes;
