import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

const mapStateToProps = (state) => {
  return {
    blog: state.blog.blog,
  };
};

const API = "https://dummyapi.io/data/api/post?limit=50";
const APP_ID = "601ead21b91b092675004fb2";

const mapDispatchToProps = (dispatch) => {
  return {
    getAPI: () => {
      axios
        .get(`${API}`, { headers: { "app-id": APP_ID } }, { delayed: true })
        .then(function (response) {
          // handle success
          dispatch({ type: "BLOG", payload: response.data.data });
        })
        .catch(function (error) {
          // handle error
          console.log(error.response);
        });
    },
  };
};

class Blog extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAPI();
  }

  // changePage = (e) => {
  //     this.props.history.push("/blog/" + e.target.value)
  // }

  render() {
    const slice = this.props.blog;
    return (
      <div>
        <div className="section-vcardbody section-page" id="page-blog">
          <div className="section-blog">
            {/* Section title */}
            <h2 className="section-title">Blog</h2>
            {/* /Section title */}

            {/* BLOG POSTS */}
            <div className="blog-posts">
              {/* blog-item */}
              {slice.map((data, key) => {
                return (
                  <div className="blog-item" key={key}>
                    <div className="blog-item-wrapper">
                      {/* blog item thumbnail */}
                      <div className="blog-item-thumb">
                        <img src={data.image} alt="" />
                      </div>
                      {/* /blog item thumbnail */}
                      {/* Blog item - infos */}
                      <div className="blog-item-infos">
                        {/* blog-item-title */}
                        <div className="blog-item-title-wrapper">
                          <h2 className="blog-item-title title-border">
                            {data.id}
                          </h2>
                        </div>
                        {/* /blog-item-title */}
                        {/* blog item - description */}
                        <div className="blog-item-description">
                          <p>{data.text}</p>
                        </div>
                        {/* /blog-item-description */}
                        {/* blog item - link */}
                        <div className="blog-item-link">
                          {/* <a href="single.html" className="btn btn-default loadPost">See More</a> */}
                        </div>
                        {/* /blog item - link */}
                      </div>
                      {/* /blog item - infos */}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* /BLOG POSTS */}

            {/* Pagination */}
            <div className="section-pagination">
              <div className="row">
                <div className="col-xs-12">
                  <span className="pagination-numbers">
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">6</a>
                  </span>
                </div>
              </div>
            </div>
            {/* /Pagination */}
          </div>
        </div>
        {/* <BlogIsi /> */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
