import Root from './components/root'
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import React from 'react'
import { logout, login, signup } from './actions/session_actions'
import {fetchProducts, fetchProduct} from './actions/product_actions'
import {createReview, deleteReview} from './actions/review_actions'


document.addEventListener("DOMContentLoaded", () => {

    const root = document.getElementById("root");
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    ReactDOM.render(<Root store={store} />, root);

    window.store = store;
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchProducts = fetchProducts;
    window.fetchProduct = fetchProduct;
    window.createReview = createReview;
    window.deleteReview = deleteReview;

});