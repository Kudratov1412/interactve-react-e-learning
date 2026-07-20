import React from "react";
// Global Style
import GlobalStyle from "./components/GlobalStyle";
// import pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import Courses from "./pages/Courses";
import ContactUs from "./pages/ContactUs";
import CourseDetail from "./pages/CourseDetail";
// Router
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/courses" exact>
          <Courses />
        </Route>
        <Route path="/courses/:id">
          <CourseDetail />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
