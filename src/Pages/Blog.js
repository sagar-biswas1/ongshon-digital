import React from "react";
import BlogArticles from "../Component/BlogArticles";
import SideBar from "../Component/SideBar";

import Title from "../Component/Title";
function Blog() {
  return (
    <>
      <Title title="Welcome to my blog." />
      <div className="blog">
        {/* style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }} */}
        <div className="blog_articles">
          <BlogArticles />
        </div>
        {/* <div className="side_bar">
          <SideBar  />
        </div> */}
      </div>
    </>
  );
}

export default Blog;
