import { legacy_createStore as createStore } from 'redux'
import reducers from './reducers'
// import { applyMiddleware } from 'redux';
// import { ResolveThunks } from 'react-redux';

const store = createStore(reducers, {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    // applyMiddleware(thunk)
    );

export default store;
