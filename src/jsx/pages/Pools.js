import React, { Fragment } from "react";
// BS
import { Dropdown, Nav, Tab } from "react-bootstrap";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";
// images
import avatar1 from "../../images/avatar/1.jpg";
import avatar2 from "../../images/avatar/2.jpg";
import avatar3 from "../../images/avatar/3.jpg";
import avatar4 from "../../images/avatar/4.jpg";
import bg1 from "../../images/big/img1.jpg";
import bg5 from "../../images/big/img5.jpg";
import profile from "../../images/profile/profile.png";
import DonutChart from "./WidgetBasic/DonutChart";
import ActiveUser from "./WidgetBasic/ActiveUser";
import AllSell1 from "./WidgetBasic/AllSell1";
import AllSell2 from "./WidgetBasic/AllSell2";
import BloodPressur from "./WidgetBasic/BloodPressure";
import Clolesterol from "./WidgetBasic/Clolesterol";
import FeeCollection from "./WidgetBasic/FeeCollection";
import GlucoseRate from "./WidgetBasic/GlucoseRate";
import HeartRate from "./WidgetBasic/HeartRate";
import LifeTimeEarning from "./WidgetBasic/LifeTimeEarning";
import MarketNow from "./WidgetBasic/MarketNow";
import NewStudent from "./WidgetBasic/NewStudent";
import PowerBar from "./WidgetBasic/PowerBar";
import PowerLine from "./WidgetBasic/PowerLine";
import SalesAnalysis from "./WidgetBasic/SalesAnalysis";
import TopProducts1 from "./WidgetBasic/TopProducts1";
import TopProducts2 from "./WidgetBasic/TopProducts2";
import TotalCourse from "./WidgetBasic/TotalCourse";
import TotalStudent from "./WidgetBasic/TotalStudent";
import ViewProject from "./WidgetBasic/ViewProject";
import VisitorActivity from "./WidgetBasic/VisitorActivity";
import WeeklySales1 from "./WidgetBasic/WeeklySales1";
import WeeklySales2 from "./WidgetBasic/WeeklySales2";
import Widget1 from "./WidgetBasic/Widget1";
import Widget2 from "./WidgetBasic/Widget2";
// Page titie
import PageTitle from "../layouts/PageTitle";

const Pools = () => {
  return (
    <Fragment>
      <div className="col-xl-12 col-lg-12 col-xxl-12 col-sm-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Recent Payments Queue</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive recentOrderTable">
              <table className="table verticle-middle table-responsive-md">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Min-Stake</th>
                    <th scope="col">Profit</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pool 1</td>
                    <td>500</td>
                    <td>2.5%</td>
                    <td><a class="btn btn-primary btn-xxs shadow" href="/react/demo/widget-basic">Stake</a></td>
                  </tr>
                  <tr>
                    <td>Pool 2</td>
                    <td>800</td>
                    <td>9%</td>
                    <td><a class="btn btn-primary btn-xxs shadow" href="/react/demo/widget-basic">Stake</a></td>
                  </tr>
                  <tr>
                    <td>Pool 3</td>
                    <td>1000</td>
                    <td>20%</td>
                    <td><a class="btn btn-primary btn-xxs shadow" href="/react/demo/widget-basic">Stake</a></td>
                  </tr>
                  <tr>
                    <td>Pool 4</td>
                    <td>1500</td>
                    <td>33%</td>
                    <td><a class="btn btn-primary btn-xxs shadow" href="/react/demo/widget-basic">Stake</a></td>
                  </tr>
                  <tr>
                    <td>Pool 5</td>
                    <td>2000</td>
                    <td>70%</td>
                    <td><a class="btn btn-primary btn-xxs shadow" href="/react/demo/widget-basic">Stake</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>  
    </Fragment>
  );
};

export default Pools;
