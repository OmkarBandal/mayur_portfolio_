import React, { useEffect } from "react";
import "./index.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Box, Grid } from "@mui/material";

const PageAboutme = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="about">
      <h1 className="heading">ABOUT</h1>
      <p className="para">
        {" "}
        2 years of an IT Experience in{" "}
        <span style={{ color: "violet" }}> Mobile Application Devlopment</span>.
        Currently associated with 'Saisanket Automation Pvt.Ltd.'-Mumbai as an
        Application Devloper. I'm having hands on experience in devlopment using{" "}
        <span style={{ color: "violet" }}>
          Flutter, ASP.Net/ASP.Net core. web API, Dart
        </span>
        .{" "}
      </p>
      <div className="projectSection">
        <h4 className="heading">MY PROJECTS</h4>
        {/* ----------------- project Section 1,2----------------------------------- */}
        <div className="container my-3">
         
            <Grid container spacing={2}>
              <Grid item  lg={6} md={12} sm={12}>
              <div className="card iCards" data-aos="zoom-in">
                <div className="card-body">
                  <h5 className="card-title">Water Monitoring System (WMS)</h5>
                  <h6 className="card-subtitle mb-2">
                    <span className="role"> Role </span>:{" "}
                    <span style={{ color: "violet" }}> Junior Developer</span>
                  </h6>
                  <h6>
                    Tech-Stack :{" "}
                    <span style={{ color: "violet" }}>
                      Flutter, ASP Core Web API, SQL server, MySQL
                    </span>
                  </h6>
                  <p className="card-text">
                    Description :
                    <ul>
                      <li>
                        This project is developed to monitoring the system
                        functionalities.
                      </li>
                      <li>
                        The mobile app has 2 functionality modules as below
                        <ul>
                          <li style={{ listStyleType: "circle" }}>
                            Process Monitoring
                          </li>
                          <li style={{ listStyleType: "circle" }}>
                            System Monitoring
                          </li>
                        </ul>
                      </li>
                      <li>
                        Successfully delivered the application as per business
                        requirements.
                      </li>
                      <li>Defect Leakage - 0% for each release</li>
                    </ul>
                    <a href="#" className="card-link">
                      https://play.google.com/store/apps/details?id=com.water_management_system
                    </a>
                  </p>
                </div>
                </div>
              </Grid>
              <Grid item  lg={6} md={12} sm={12}>
              <div className="card iCards" data-aos="zoom-in">
                <div className="card-body">
                  <h5 className="card-title">ECM Mobile Application</h5>
                  <h6 className="card-subtitle mb-2">
                    <span className="role"> Role </span> :{" "}
                    <span style={{ color: "violet" }}> Developer</span>
                  </h6>
                  <h6>
                    Tech-Stack :{" "}
                    <span style={{ color: "violet" }}>
                      Flutter, ASP Core Web API, SQL server, MySQL
                    </span>
                  </h6>
                  <p className="card-text">
                    Description :
                    <ul>
                      <li>
                        This project is developed to monitoring the system
                        functionalities.
                      </li>
                      <li>
                        The mobile app has 4 functionality modules as below -
                      </li>
                      <ul>
                        <li style={{ listStyleType: "circle" }}>
                          Maintenance Guidance Tool ,Damage/ Rectification Tool
                        </li>
                        <li style={{ listStyleType: "circle" }}>
                          Erection and Commissioning Tool,Routine Check Too
                        </li>
                      </ul>
                      <li>
                        Successfully delivered the application as per business
                        requirements.
                      </li>
                      <li>Defect Leakage - 0% for each release</li>
                    </ul>
                  </p>
                  <a href="#" className="card-link">
                    https://play.google.com/store/apps/details?id=com.saisanket.ecm_application
                  </a>
                </div>
              </div>

              </Grid>
            </Grid>
          
        </div>
        {/* -------------------------------project Section 3,4------------------------------------------ */}

        <div className="container">
         
    <Grid container spacing={2}> 
          <Grid item  lg={6} md={12} sm={12}>
          <div className="card iCards" data-aos="zoom-in">
                <div className="card-body">
                  <h5 className="card-title">
                    Bluetooth Controller Application
                  </h5>
                  <h6 className="card-subtitle mb-2">
                    <span className="role"> Role </span>:{" "}
                    <span style={{ color: "violet" }}> Developer</span>
                  </h6>
                  <h6>
                    Tech-Stack :{" "}
                    <span style={{ color: "violet" }}>
                      Flutter, ASP Core Web API, SQL Server, MySQL, Flutter Blue
                    </span>
                  </h6>
                  <p className="card-text">
                    Description :
                    <ul>
                      <li>
                        The mobile app has 4 functionality modules as below -
                        <ul>
                          <li style={{ listStyleType: "circle" }}>
                            Bluetooth Connectivity,Process Monitoring
                          </li>
                          <li style={{ listStyleType: "circle" }}>
                            Local operations, Firmware update
                          </li>
                        </ul>
                      </li>
                      <li>The project is in development mode.</li>
                    </ul>
                  </p>
                </div>
              </div>
          </Grid>
          <Grid item  lg={6} md={12} sm={12}>
          <div className="card iCards" data-aos="zoom-in">
                <div className="card-body">
                  <h5 className="card-title">
                    USPL Mobile & Windows Application
                  </h5>
                  <h6 className="card-subtitle mb-2">
                    <span className="role"> Role </span> :{" "}
                    <span style={{ color: "violet" }}> Developer</span>
                  </h6>
                  <h6>
                    Tech-Stack :{" "}
                    <span style={{ color: "violet" }}>
                      Flutter, Node-JS Web API, MySQL
                    </span>
                  </h6>
                  <p className="card-text">
                    Description :
                    <ul>
                      <li>
                        This project is developed to monitoring the users tread
                        taken by our server.
                      </li>
                      <li>
                        This project is initially developed for only for Bank
                        Nifty section, now we are exploring other sections.
                      </li>
                      <li>
                        The mobile app has 3 functionality modules as below -
                      </li>
                      <ul>
                        <li style={{ listStyleType: "circle" }}>Dashboard</li>
                        <li style={{ listStyleType: "circle" }}>
                          P&L Report and P&L Trend Page
                        </li>
                      </ul>
                    </ul>
                  </p>
                </div>
              </div>
          </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default PageAboutme;
