import React from "react";
import Helmet from "react-helmet";

import Layout from "../../components/Global/Layout";
import resume from "../../../static/Joshua Schoenfeld Resume.pdf";

const Resume = () => (
  <Layout>
    <Helmet title="Resume | Josh's Portfolio" />
    <div className="container" id="resume">
      <object type="application/pdf" width="100%" height="1000px" data={resume}>
        Josh Schoenfeld's Resume
      </object>
    </div>
  </Layout>
);

export default Resume;
