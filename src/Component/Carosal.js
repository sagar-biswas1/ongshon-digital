import React from "react";

function Carosal() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80"
            className="d-block w-100"
            alt="..."
            style={{
              height: "300px",
              justifyContent: "center",
              objectFit: "cover",
            }}
          />
          <div className="carousel-caption ">
            <div className="carosal_text">
              <h3>Welcome to our place...</h3>
              <h2>Grow your business with Ongshon Digital</h2>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=753&q=80"
            className="d-block w-100"
            alt="..."
            style={{
              height: "300px",
              justifyContent: "center",
              objectFit: "cover",
            }}
          />
          <div className="carousel-caption ">
            <div className="carosal_text">
              <h3>Welcome to our place...</h3>
              <h2>Grow your business with Ongshon Digital</h2>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carosal;
