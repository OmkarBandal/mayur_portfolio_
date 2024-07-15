import React, { useEffect } from "react";
import "./index.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Grid } from "@mui/material";

const PagePersonalinfo = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="personalInfo2">
      <h1 className="heading">PERSONAL INFO</h1>
      <div
        className="container infoSection"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
        data-aos="flip-up"
      >
        <Grid container spacing={2}>
          <Grid item lg={12} md={12} sm={12}>
            <div>
              {" "}
              <span>Birthday</span> : 8 June 2000{" "}
            </div>
            <div>
              {" "}
              <span>Contact Number</span> : +91 7715996218{" "}
            </div>
            <div>
              {" "}
              <span>Email</span> : dev.mayurvishwakarma@gmail.com{" "}
            </div>
            <div>
              {" "}
              <span>Address</span> : Room no.3,Siddhi Vinayak Chawal, Rajendra
              Nagar,Borivali East, Mumbai-400066
            </div>
          </Grid>
        </Grid>
      </div>

      {/* <marquee
        direction="right"
        style={{ padding: "20px 0px", fontSize: "30px" }}
      >
        {" "}
        * Thanks for Visiting *{" "}
      </marquee> */}
    </div>
  );
};

export default PagePersonalinfo;
