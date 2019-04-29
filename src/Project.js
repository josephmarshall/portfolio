import React from "react";
import { projectData } from "./projectData";
import { Container } from "semantic-ui-react";
import ProjectNavBar from "./ProjectNavBar";
import CryptonHome from "./CryptonHome"

class Project extends React.Component {
  render() {
    const p = projectData.filter(
      project => project.name === this.props.match.params.name
    )[0];

    return (
      <Container>
        <ProjectNavBar />
        {p.name === "CRYPTON" ? (<CryptonHome />) : (
          <iframe src={p.link} style={{ height: "80vh", width: "100%" }} />
        )}
      </Container>
    );
  }
}

export default Project;
