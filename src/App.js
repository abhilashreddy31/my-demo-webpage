import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from "./components/main/Home/home";
import Section1 from './components/main/Section2/section2';
import Section3 from './components/main/Section3/section3';
import Section5 from './components/main/Section5/section5';
import Section6 from './components/main/Section6/section6';
import Section7 from './components/main/Section7/section7';
import Section8 from './components/main/Section8/setion8';
import Section9 from './components/main/Section9/section9';
import Section10 from './components/main/Section10/section10';


const App = () => {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Home></Home>
        {/* <Section1></Section1> */}
        {/* <Section3></Section3> */}
        {/* <Section5></Section5> */}
        {/* <Section6></Section6> */}
        {/* <Section8></Section8> */}

        {/* <Section7></Section7> */}

        {/* <Section9></Section9> */}
        {/* <Section10></Section10> */}

        <Routes>
          <Route exact path="/" component={Navbar} />
          <Route exact path="/" component={Navbar} />
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;
