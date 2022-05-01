import React, { useEffect } from "react";
import './App.css';
import Header from './Header'
import Home from "./Home";
import Checkout from './Checkout'
import Login from './Login'
import Payment from './Payment'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from '@stripe/react-stripe-js'
import Typical from "react-typical";


import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";


const promise = loadStripe(
  "pk_test_51KmBrnGqAWx34Y8Ik579vL9asStMFiZTunuk2iasZvfiYlxA3jOUfeOGbf9yp2z2d8ZAzZ9l84KdUFdWBaTO5Emj009beeX5ds"
)

function App() {
  const [{cart}, dispatch] = useStateValue();
  useEffect(()=> {
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER: ', authUser);
      if (authUser) {
        //the user just/was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <>
                {" "}
                <Header /> <Checkout />{" "}
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                {" "}
                <Header />{" "}
                <Elements stripe={promise}>
                  {" "}
                  <Payment />{" "}
                </Elements>{" "}
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                {" "}
                <Header /> <Home />
              </>
            }
          />
        </Routes>
        <NotificationContainer />
      </Router>
    </div>
  );
}

export default App;
