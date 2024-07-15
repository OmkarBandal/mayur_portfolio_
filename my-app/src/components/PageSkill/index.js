import React, { useEffect } from "react";
import "./index.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Grid } from "@mui/material";

const PageSkill = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="skills">
      <h1 className="heading">WHAT I KNOW</h1>

      <div className="container">
        <Grid container spacing={2}>
          <Grid item lg={6} md={12} sm={12} style={{width:'100vw'}}>
          <div class="card iCard" data-aos="fade-left" >
            <div class="card-body">
              <h5 class="card-title">Languages and Frameworks</h5>
              <div className="skillSection">
                <span>Flutter</span> <span> ASP.NET</span> <span>SQL</span>{" "}
                <span>Python</span> <span>Dart</span>
              </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={6} md={12} sm={12} style={{width:'100vw'}}>
            <div class="card iCard" data-aos="fade-left">
              <div class="card-body">
                <h5 class="card-title">Database</h5>
                <div className="skillSection">
                  <span>MySQL</span> <span> Microsoft SQL server</span>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default PageSkill;
