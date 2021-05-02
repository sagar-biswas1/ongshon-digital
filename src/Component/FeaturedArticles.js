import React, { Component } from "react";
import { RoomContext } from "../Context";
import Title from "./Title";
//import Room from "./Room";
import Article from "./Article";
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    //    console.log("sagor", this.context);
    const { featuredArticles } = this.context;
    let featuredArticle = featuredArticles.map((article) => {
      return <Article key={article.id} article={article} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="Featured Articles" />
        <section
          className="featured-rooms-center"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {featuredArticle}
        </section>
      </section>
    );
  }
}
