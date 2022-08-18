import {BrowserRouter as Router, Routes, Route  } from "react-router-dom"
import React, { Component } from "react";
import Navbar from "./Navbar";
import Team from "./Team";
import MemberDetails from "./MemberDetails";
import Footer from "./Footer";


class App extends Component{
  render(){
      return( 
        <div>
        <Router>
        <div className="container">
            <Navbar />
            <Routes>
            <Route path="/" exact element={<Team />}/>
            <Route path='/member/:id' element={<MemberDetails />}/>
            </Routes>
        </div>
        </Router>
        <Footer />
        </div>
        )
    }
}

export default App;

