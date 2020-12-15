import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';
import * as Actions from './actions/session_actions';
import configureStore from './store/store'
import Root from './components/root'
import * as HikeAPI from './util/hike_api_util'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    let store;
    //test
    // window.login = Actions.login
    // window.signup = Actions.signup
    // window.logout = Actions.logout
    // window.getState = store.getState 
    // window.dispatch = store.dispatch
  window.fetchNationalPark = HikeAPI.fetchNationalPark({ lat: 48.7596, lon: 113.7870})
  113.7870
    //test


    if (window.currentUser) {
      const preloadedState = {
        session: { id: window.currentUser.id },
        entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
      };
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
      store = configureStore();
    }
  
  window.store = store

  ReactDOM.render( <Root store = {store}/>, root)
})

