import React, { Component } from "react";
import Article from "./Article";
import { RoomContext } from "../Context";
import Title from "./Title";
//import Room from "./Room";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    //    console.log("sagor", this.context);
    const { sortedArticles } = this.context;
    // console.log("d", sortedArticles);
    let articles = sortedArticles.map((article) => {
      return <Article key={article.id} article={article} />;
    });
    return (
      <section className="featured-rooms">
        {/* <Title title="Welcome to my blog." /> */}
        <section
          className="featured-rooms-center"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {articles}
        </section>
      </section>
    );
  }
}
