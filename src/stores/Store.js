import { createStore, combineReducers } from 'redux';
// import ThemeOptions from './theme/Theme';
// import User from './user/User';

const store = createStore(createReducer());

export default (() => {
    window.$store = store;
    return store;
})();

function createReducer (reducers) {
    return combineReducers({
        // ThemeOptions,
        // User
    });
}