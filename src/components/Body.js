import React, { Component } from "react";
import Menu from "./Menu";
import Home from "./Home";
import Resume from "./Resume";
import Skill from "./Skill";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Contact from "./Contact";
import BlogPost from "./BlogPost";

class Body extends Component {
  render() {
    return (
      <section id="body">
        <div className="container">
          <Menu />
          <Home />
          <Resume />
          <Skill />
          <Portfolio />
          <Blog />
          <BlogPost />
          <Contact />
        </div>
      </section>
    );
  }
}

export default Body;
