import React from "react";
import PropTypes from "prop-types";
import ProjectPostTemplate from "../../templates/project-post-template";

const ProjectPostPreview = ({ entry, widgetFor }) => (
  <ProjectPostTemplate
    content={widgetFor("body")}
    description={entry.getIn(["data", "description"])}
    tags={entry.getIn(["data", "tags"])}
    title={entry.getIn(["data", "title"])}
  />
);

ProjectPostPreview.propTypes = {
  entry: PropTypes.shape({ getIn: PropTypes.func }),
  widgetFor: PropTypes.func
};

export default ProjectPostPreview;
