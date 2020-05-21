import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import Home from "./components/home/Home";
import Login from "./components/admin/login/Login";
import Register from "./components/admin/login/Register";
import Establishments from "./components/admin/manager/Establishments";
import AddEstablishment from "./components/admin/manager/AddEstablishment";
import EditEstablishment from "./components/admin/manager/EditEstablishment";
import Dashboard from "./components/admin/dashboard/Dashboard";
import Accomodations from "./components/accomodations/Accomodations";
import Contact from "./components/contact/Contact";
import Navigation from "./components/layout/navigation/Navigation";
import Footer from "./components/layout/navigation/Footer";

import "./sass/style.scss";


function App() {
  return (
    <>
    <AuthContextProvider>
      <Router>
        <Navigation />
          <Switch>
            <Route path="/"exact component={Home}/>
            <Route path="/accomodations"exact component={Accomodations}/>
            <Route path="/contact" exact component={Contact} />
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <ProtectedRoute path="/admin" exact component={Dashboard} />
            <ProtectedRoute path="/admin/establishments" exact component={Establishments} />
            <ProtectedRoute path="/admin/establishments/add" exact component={AddEstablishment} />
            <ProtectedRoute path="/admin/establishments/edit/:id" exact component={EditEstablishment} />
            <Redirect to="/" />
          </Switch>
          <Footer/>
      </Router>
    </AuthContextProvider>
    
    </>
  );
}

export default App;
