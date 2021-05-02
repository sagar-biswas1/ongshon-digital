import React from "react";

function Title({ title }) {
  return (
    <div>
      <hr className="my-2"></hr>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <h1>{title}</h1>
        </li>
      </ul>
      <hr className="my-2"></hr>
    </div>
  );
}

export default Title;
