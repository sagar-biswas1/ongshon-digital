import React from "react";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import RepeatOneIcon from "@material-ui/icons/RepeatOne";
import Sm from "../../images/Sm.png";
import P4 from "../../images/P4.png";
import P2 from "../../images/P2.png";
function SocialMediaMkt() {
  return (
    <>
      <div>
        <h2 className="package_heading">Packages of Social Media Marketing</h2>
      </div>
      <div className="row row-cols-1 row-cols-md-3">
        <div className="col mb-4 ">
          <div className="card package_box_sm">
            <img src={Sm} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title ">
                Basic : Social Media Marketing for 7 days
              </h5>
              <table className="table table-primary">
                <thead>
                  <tr>
                    <th scope="col">Budget</th>
                    <th scope="col">50 dollars </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Days </th>
                    <td>7 days</td>
                  </tr>
                  <tr>
                    <th scope="row" colspan="2">
                      1. Evaluate your id and page<br></br> 2.Research your
                      audience and content<br></br> 3.post scheduling
                    </th>
                  </tr>
                  <tr>
                    <th scope="row" colspan="2">
                      <AccessTimeIcon /> 7 Days Delivery
                      <RepeatOneIcon /> 1 Revision
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">Tasks</th>
                    <td>
                      <ul className="support_sm">
                        <li>Page Setup</li>
                        <li>Page Optimization </li>
                        <li>1 Social Media Post</li>
                        <li>1 Week of Account Management</li>
                        <li>Tailored Marketing Plan</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>

              <a
                href="https://m.me/ongshondigital"
                target="_blank"
                className="order-button"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>

        <div className="col mb-4 ">
          <div className="card package_box_sm">
            <img src={P4} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title ">
                Standard : Social Media Marketing for 20 days
              </h5>
              <table className="table table-primary">
                <thead>
                  <tr>
                    <th scope="col">Budget</th>
                    <th scope="col">100 dollars </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Days </th>
                    <td>20 days</td>
                  </tr>
                  <tr>
                    <th scope="row" colspan="2">
                      1. Evaluate your id and page<br></br> 2.Research your
                      audience and content<br></br> 3.post scheduling
                    </th>
                  </tr>
                  <tr>
                    <th scope="row" colspan="2">
                      <AccessTimeIcon /> 20 Days Delivery
                      <RepeatOneIcon /> 2 Revision
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">Tasks</th>
                    <td>
                      <ul className="support_sm">
                        <li>Page Setup</li>
                        <li>Page Optimization </li>
                        <li>2 Social Media Post</li>
                        <li>2 Weeks of Account Management</li>
                        <li>Tailored Marketing Plan</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>

              <a
                href="https://m.me/ongshondigital"
                target="_blank"
                className="order-button"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
        <div className="col mb-4 ">
          <div className="card package_box_sm">
            <img src={P2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title ">
                Premium : Social Media Marketing for 30 days
              </h5>
              <table className="table table-primary">
                <thead>
                  <tr>
                    <th scope="col">Budget</th>
                    <th scope="col">180 dollars </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Days </th>
                    <td>30 days</td>
                  </tr>
                  <tr>
                    <th scope="row" colspan="2">
                      1. Evaluate your id and page<br></br> 2.Research your
                      audience and content<br></br> 3.post scheduling
                    </th>
                  </tr>
                  <tr>
                    <th scope="row" colspan="2">
                      <AccessTimeIcon /> 20 Days Delivery
                      <RepeatOneIcon /> 2 Revision
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">Tasks</th>
                    <td>
                      <ul className="support_sm">
                        <li>Page Setup</li>
                        <li>Page Optimization </li>
                        <li>4 Social Media Post</li>
                        <li>4 Weeks of Account Management</li>
                        <li>Tailored Marketing Plan</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>

              <a
                href="https://m.me/ongshondigital"
                target="_blank"
                className="order-button"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SocialMediaMkt;
