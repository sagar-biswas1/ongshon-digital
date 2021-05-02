import React, { Component } from "react";
import Article from "./Article";
import { RoomContext } from "../Context";
import Title from "./Title";
//import Room from "./Room";
import AlignItemsList from "./SideBarDesign";
export default class Sidebar extends Component {
  static contextType = RoomContext;
  render() {
    const { sortedArticles } = this.context;

    let articles = sortedArticles.map((article) => {
      return <AlignItemsList key={article.id} article={article} />;
    });
    return (
      <section>
        {/* className="featured-rooms featured-rooms-center" */}
        {/*       
        <section
          className="featured-rooms-center"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {articles}
        </section> */}
        <p>আপনি এই জাতীয় নিবন্ধগুলি পড়তে পারেন</p>
        {articles}
      </section>
    );
  }
}
