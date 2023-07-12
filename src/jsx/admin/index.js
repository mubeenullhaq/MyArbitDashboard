import React, { useContext } from "react";

/// React router dom
import { Routes, Route, Outlet } from "react-router-dom";

/// Css
import "./index.css";
import "./chart.css";
import "./step.css";

/// Layout
import Nav from "./layouts/nav";
import Footer from "./layouts/Footer";
//import Main from './layouts/Main';

import ScrollToTop from "./layouts/ScrollToTop";
import Card from "./components/card";

import Pools from "./pages/Pools";
import ManagePartners from "./pages/ManagePartners";
import ManageFunds from "./pages/ManageFunds";
import ManageStaking from "./pages/ManageStakings";
import StakeHistory from "./pages/StakeHistory";
import Transactions from "./pages/Transactions";
import Calculator from "./pages/Calculator";

import LockScreen from "./pages/LockScreen";
import Error400 from "./pages/Error400";
import Error403 from "./pages/Error403";
import Error404 from "./pages/Error404";
import Error500 from "./pages/Error500";
import Error503 from "./pages/Error503";
import { ThemeContext } from "../../context/ThemeContext";
import bitcoin from "../../images/background/bitcoin.png";
import asd from "../../images/background/asd.png";
import dogecoin from "../../images/background/dogecoin.png";
import litecoin from "../../images/background/litecoin.png";
import eth from "../../images/background/eth.png";

const Markup = () => {
  const allroutes = [
    { url: "pools", component: <Pools /> },
    { url: "manage_partners", component: <ManagePartners /> },
    { url: "manage-funds", component: <ManageFunds /> },
    { url: "calculator", component: <Calculator /> },
    { url: "stake-history", component: <StakeHistory /> },
    { url: "transactions", component: <Transactions /> },
  ];

  return (
    <>
      <Routes>
        <Route path="page-lock-screen" element={<LockScreen />} />
        <Route path="page-error-400" element={<Error400 />} />
        <Route path="page-error-403" element={<Error403 />} />
        <Route path="page-error-404" element={<Error404 />} />
        <Route path="page-error-500" element={<Error500 />} />
        <Route path="page-error-503" element={<Error503 />} />
        <Route element={<MainLayout />}>
          {allroutes.map((data, i) => (
            <Route key={i} exact path={`${data.url}`} element={data.component} />
          ))}
        </Route>
        <Route path="page-lock-screen" element={<LockScreen />} />
        <Route path="page-error-400" element={<Error400 />} />
        <Route path="page-error-403" element={<Error403 />} />
        <Route path="page-error-404" element={<Error404 />} />
        <Route path="page-error-500" element={<Error500 />} />
        <Route path="page-error-503" element={<Error503 />} />
      </Routes>
      <ScrollToTop />
    </>
  );
};

function MainLayout() {
  const { menuToggle } = useContext(ThemeContext);
  return (
    <div id="main-wrapper" className={`show ${menuToggle ? "menu-toggle" : ""}`}>
      <div class="area">
        <ul class="circles">
          <li>
            <img src={bitcoin} className="img-fluid rounded-circle" alt="profile" />
          </li>
          <li>
            <img src={asd} className="img-fluid rounded-circle" alt="profile" />
          </li>
          <li>
            <img src={dogecoin} className="img-fluid rounded-circle" alt="profile" />
          </li>
          <li>
            <img src={litecoin} className="img-fluid rounded-circle" alt="profile" />
          </li>
          <li>
            <img src={eth} className="img-fluid rounded-circle" alt="profile" />
          </li>
          <li>
            <img src={bitcoin} className="img-fluid rounded-circle" alt="profile" />
          </li>
          <li>
            <img src={asd} className="img-fluid rounded-circle" alt="profile" />
          </li>
          <li>
            <img src={dogecoin} className="img-fluid rounded-circle" alt="profile" />
          </li>
          <li>
            <img src={litecoin} className="img-fluid rounded-circle" alt="profile" />
          </li>
          <li>
            <img src={eth} className="img-fluid rounded-circle" alt="profile" />
          </li>
        </ul>
        <Nav />
        <div className="content-body" style={{ minHeight: window.screen.height - 45 }}>
          <div className="container-fluid">
            {/* <Card /> */}
            <Outlet />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Markup;
