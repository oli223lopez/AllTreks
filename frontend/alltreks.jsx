import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';
import * as Actions from './actions/session_actions';
import configureStore from './store/store'
import Root from './components/root'
import * as HikeAPI from './util/hike_api_util'
import * as NationalParkAPI from './util/national_park_api_util'
import * as ReviewAPI from './util/review_api_util'
import GA4React from 'ga-4-react'
const ga4react = new GA4React("G-FJVWRKRXPD")

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    let store;
   



    if (window.currentUser) {
      const preloadedState = {
        session: { id: window.currentUser.id },
        entities: {
        users: window.currentUser
      }
      };
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
      store = configureStore();
    }
  
  window.store = store
  
    test(store)
})


function test(store){
  ga4react.initialize()
  ReactDOM.render( <Root store = {store}/>, root)
}
