import React from "react";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import RepeatOneIcon from "@material-ui/icons/RepeatOne";
import Sm from "../../images/Sm.png";
import P4 from "../../images/P4.png";
import P2 from "../../images/P2.png";
function Youtube() {
  return (
    <>
      <div>
        <h2 className="package_heading">Packages of youtube SEO</h2>
      </div>
      <div className="row row-cols-1 row-cols-md-3">
        <div className="col mb-4 ">
          <div className="card package_box_yt">
            <img src={Sm} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title ">Basic : Youtube SEO Rank</h5>
              <table className="table table-primary">
                <thead>
                  <tr>
                    <th scope="col">Budget</th>
                    <th scope="col">30 dollars </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Days </th>
                    <td>5 days</td>
                  </tr>
                  <tr>
                    <th scope="row" colspan="2">
                      1. 1 Video Optimizede<br></br> 2.Title & Description
                      Optimized<br></br> 3.1 Meta Tag<br></br>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row" colspan="2">
                      <AccessTimeIcon /> 5 Days Delivery
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">Tasks</th>
                    <td>
                      <ul className="support_sm">
                        <li>Page/Channel Evaluation</li>
                        <li>3 Keywords/Hashtags Research </li>
                        <li>1 Video Optimization</li>
                        <li>Meta Tag Optimization</li>
                        <li>Title & Description Optimized</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>

              <a href="https://m.me/ongshondigital" className="order-button">
                Contact us
              </a>
            </div>
          </div>
        </div>

        <div className="col mb-4 ">
          <div className="card package_box_yt">
            <img src={P4} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title ">Standard : Fast Youtube SEO Rank</h5>
              <table className="table table-primary">
                <thead>
                  <tr>
                    <th scope="col">Budget</th>
                    <th scope="col">60 dollars </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Days </th>
                    <td>7 days</td>
                  </tr>
                  <tr>
                    <th scope="row" colspan="2">
                      1. Channel Evaluation,<br></br> 2.1 Video Optimization
                      <br></br> 3.Title & Description Optimization <br></br> 4.
                      2 Meta Tag
                    </th>
                  </tr>
                  <tr>
                    <th scope="row" colspan="2">
                      <AccessTimeIcon /> 7 Days Delivery
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">Tasks</th>
                    <td>
                      <ul className="support_sm">
                        <li>Page/Channel Evaluation</li>
                        <li>5 Keywords/Hashtags Research</li>
                        <li>1 Video Optimization</li>
                        <li>Meta Tag Optimization</li>
                        <li>Title & Description Optimized</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>

              <a href="https://m.me/ongshondigital" className="order-button">
                Contact us
              </a>
            </div>
          </div>
        </div>
        <div className="col mb-4 ">
          <div className="card package_box_yt">
            <img src={P2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title ">Premium : Pro Youtube SEO Rank</h5>
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
                    <td>10 days</td>
                  </tr>
                  <tr>
                    <th scope="row" colspan="2">
                      1. Channel Evaluation,<br></br> 2.1 Video Optimization
                      <br></br> 3.Title & Description Optimization <br></br> 4.
                      2 Meta Tag
                    </th>
                  </tr>
                  <tr>
                    <th scope="row" colspan="2">
                      <AccessTimeIcon /> 10 Days Delivery
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">Tasks</th>
                    <td>
                      <ul className="support_sm">
                        <li>Page/Channel Evaluation</li>
                        <li>9 Keywords/Hashtags Research</li>
                        <li>1 Video Optimization</li>
                        <li>Meta Tag Optimization</li>
                        <li>Title & Description Optimized</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>

              <a href="https://m.me/ongshondigital" className="order-button">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Youtube;
