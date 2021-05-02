import React, { Component } from "react";

import { Link } from "react-router-dom";
import Single_article from "../Component/SingleArticleBlog";
import { RoomContext } from "../Context";
import SideBar from "../Component/SideBar";
import Footer from "../Component/Footer";
export default class SingleArticle extends Component {
  // componentDidMount() {
  //   state = { slug: this.props.match.params.slug, room1 };
  // }
  static contextType = RoomContext;

  render() {
    const { getArticle } = this.context;
    const article = getArticle(this.props.match.params.slug);

    if (!article) {
      return (
        <>
          <div className="error" style={{ marginTop: "20vh" }}>
            <Link
              to="/"
              className="btn-primary"
              style={{
                background: "yellow",
                textDecoration: "none",
                color: "red",
              }}
            >
              <h3>No article could be found</h3>
              Back to the Home
            </Link>
          </div>
        </>
      );
    }
    const {
      name,
      description,

      extras,
      id,
      images,
    } = article;
    const [mainImg, ...defaultImg] = images;
    //this is array destructuring....

    return (
      <>
        <div className="sagor">
          <div>
            <div className="blog_article_single">
              <Single_article info={article} key={id} />
            </div>
            <div className="side_bar">
              <SideBar />
            </div>
          </div>
          {/* <div>
            <Footer />
          </div> */}
        </div>
      </>
    );
  }
}
