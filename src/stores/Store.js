import { createStore, combineReducers } from 'redux';
// import ThemeOptions from './theme/Theme';
// import User from './user/User';

const store = createStore(reducer);

export default (() => {
    window.$store = store;
    return store;
})();

function reducer(state = {}, action) {
    return state
}

// function createReducer (reducers) {
//     return combineReducers({
//     //     // ThemeOptions,
//     //     // User
//     });
// }

