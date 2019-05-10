import {lazy} from 'react';
import Full from '../layouts/Full';
import Header from '../layouts/Header';
import Menu from '../layouts/Menu';
import SplitPane from '../layouts/SplitPane';
import Tabs from '../layouts/Tabs';

// const Form = lazy(() => import('./Form.js'));
import Form from './Form.js';

const Routes = [
    {
        path: '/form',
        title: 'Form',
        component: Form,
        layout: Tabs
    },
    {
        path: '/menu',
        title: 'Menu',
        component: Form,
        layout: Menu
    },
    {
        path: '/full',
        title: 'Full',
        component: Form,
        layout: Full
    },
    {
        path: '/header',
        title: 'Header',
        component: Form,
        layout: Header
    },
    {
        path: '/tabs',
        title: 'Tabs',
        component: Form,
        layout: Tabs
    },
    {
        path: '/split',
        title: 'Split',
        component: Form,
        layout: SplitPane
    }
];

export default Routes