import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import Home from "./components/home/Home";
import Login from "./components/admin/login/Login";
import Register from "./components/admin/login/Register";
import Establishments from "./components/admin/establishmentmanager/Establishments";
import AddEstablishment from "./components/admin/establishmentmanager/AddEstablishment";
import EditEstablishment from "./components/admin/establishmentmanager/EditEstablishment";
import Dashboard from "./components/admin/dashboard/Dashboard";
import Accomodations from "./components/accomodations/Accomodations";
import AccomodationDetail from "./components/accomodations/AccomodationDetail";
import AccomodationInquiry from "./components/accomodations/inquiries/AccomodationInquiry";
import Contact from "./components/contact/Contact";
import Navigation from "./components/layout/navigation/Navigation";
import Footer from "./components/layout/navigation/Footer";

import "./sass/style.scss";
import InquiriesList from "./components/admin/inquiries/InquiriesList";
import Messages from "./components/admin/contactMessages/Messages";


function App() {
  return (
    <>
    <AuthContextProvider>
      <Router>
        <Navigation />
          <Switch>
            <Route path="/"exact component={Home}/>
            <Route path="/accomodations"exact component={Accomodations}/>
            <Route path="/accomodations/:id" component={AccomodationDetail} />
            <Route path="/establishments/inquiry/:id" component={AccomodationInquiry} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <ProtectedRoute path="/admin" exact component={Dashboard} />
            <ProtectedRoute path="/admin/establishments" exact component={Establishments} />
            <ProtectedRoute path="/admin/establishments/add" exact component={AddEstablishment} />
            <ProtectedRoute path="/admin/establishments/edit/:id" exact component={EditEstablishment} />
            <ProtectedRoute path="/admin/enquiries" exact component={InquiriesList} />
            <ProtectedRoute path="/admin/messages" exact component={Messages} />
            <Redirect to="/" />
          </Switch>
          <Footer/>
      </Router>
    </AuthContextProvider>
    
    </>
  );
}

export default App;
