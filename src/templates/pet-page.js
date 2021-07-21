import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Global/Layout";
import { HTMLContent } from "../components/Content";
import PetsPageTemplate from "./pet-page-template";

const PetsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PetsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

PetsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default PetsPage;

export const PetsPageQuery = graphql`
  query PetsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
