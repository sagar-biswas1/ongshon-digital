import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Single_article({ info }) {
  const { name, slug, images, description } = info;
  //console.log("sdsds", typeof description);
  const [articleDes, setArticleDes] = useState("");
  useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
    setArticleDes(description);

    console.log("sagor", articleDes);
    const sam = (document.getElementById("description").innerHTML = articleDes);
    return sam;
    //  console.log("hey dipa", document.getElementById("description"));
  });

  console.log("hey", document.getElementById("description"));

  return (
    <div className="card">
      {/* style={{ width: "80%", margin: "auto" }} */}
      <img
        src={images[0]}
        className="card-img-top"
        alt="..."
        style={{
          height: "30vh",
          objectFit: "contain",
          margin: "auto",
        }}
      />
      <div className="card ">
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
          <br></br>
          <hr></hr>
          {/* <pre className="card-text text_justify" id="description" > */}
          <div id="description">{articleDes}</div>
          {/* {description} */}
          {/* {articleDes} */}
          {/* </pre> */}
          {/* {description} */}
          <div className="card-title text-center">
            <Link to="/" className="btn btn-primary mx-4 my-3">
              Return Home
            </Link>
            <Link to="/blog" className="btn btn-primary mx-4 my-3">
              Return Blog
            </Link>
          </div>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>
    </div>
  );
}

export default Single_article;
