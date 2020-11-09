import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Status from "./components/Status";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const Routes = () => {
  return (
    <Router>
      <div className="App">
        <AppBar
          position="sticky"
          style={{ height: "130px", backgroundColor: "#ff7a3dfd" }}
        >
          <Toolbar style={{ display: "flex", justifyContent: "flex-end" }}>
            <img
              className="logo-img"
              src="https://refmentors.org.uk/wp-content/uploads/2019/12/cropped-thumbnail_FB_cover-image_amend-final-Copy.jpg"
              alt="RefMentors icon"
            />
            <div className="btns">
              <Button class="nav-btn">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </Button>
              <Button class="nav-btn">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </Button>
              <Button class="nav-btn">
                <Link className="nav-link" to="/status">
                  Status
                </Link>
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/status/" component={Status} />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

ReactDOM.render(<Routes />, document.getElementById("root"));
