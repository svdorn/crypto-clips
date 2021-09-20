import React from "react";
import PropTypes from "prop-types";
import { HashRouter, Route, Link } from "react-router-dom";
// import components
import Header from "./components/Header";
import Footer from "./components/Footer";
// import pages
import Home from "./pages/Home";
import Roadmap from "./pages/Roadmap";
import { css, withStyles } from "./withStyles";

function App({ styles }) {
  return (
    <HashRouter>
      <div>
        <Link to='/roadmap'>Roadmap</Link>
        <Header {...css(styles.header)} />
        <div {...css(styles.container)}>
          <Route exact path='/' component={Home} />
          <Route exact path='/roadmap' component={Roadmap} />
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}

App.propTypes = {
  styles: PropTypes.object.isRequired
};

export default withStyles(({ color }) => ({
  container: {
    textAlign: "center",
    padding: "50px 0",
    font: "15px intercom-text,system-ui",
    scrollBehavior: "smooth"
  },

  header: {
    backgroundColor: "transparent"
  }
}))(App);
