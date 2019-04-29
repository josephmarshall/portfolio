import React from "react";
import { Container, Image, Icon } from "semantic-ui-react";
import { projectData } from "./projectData";
import ProjectCard from "./ProjectCard";
import chris from "./chris_portrait.JPG";

import ContactInfo from "./ContactInfo";

class Home extends React.Component {
  render() {
    return (
      <Container
        style={{
          background: "black",
          color: "white",
          minHeight: "100vh"
        }}
      >
        <div style={{ display: "flex", marginLeft: "50px", flexWrap: "wrap" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "40%",
              marginTop: "100px",
              minWidth: "250px"
            }}
          >
            <Image src={chris} size="medium" rounded />
            <h1 style={{ marginBottom: 0, fontSize: "2.5em" }}>
              Christopher Larsen
            </h1>
            <div
              style={{ fontSize: "1.3em", fontWeight: "bold", padding: "10px" }}
            >
              {"I build things...Software is one of them."}
            </div>
            <div>
              <h4
                style={{
                  padding: "35px 0 35px 0",
                  lineHeight: "1.5em",
                  textIndent: "20px",
                  textAlign: "justify"
                }}
              >
                There's something great about designing and buliding software.
                An imense amount of work is focused and concentrated into a
                finite area. I heard someone say that software is the only thing
                in the world that doesn't wear out and costs nothing to
                manufacture. The goal then, in dev work, is only to create and
                nothing else. This is where I am in my element, in designing,
                creating, building, testing, and improving. There is nothing
                that is impossible...we are resource limited rather than limited
                by our dreams.
              </h4>
            </div>
            <div styl={{ position: "fixed", bottom: 0 }}>
              <ContactInfo />
            </div>
          </div>
          <div style={{ width: "60%" }}>
            <h1
              style={{ textAlign: "center", marginTop: "20px", color: "black" }}
            >
              My Projects
            </h1>
            {projectData.map(p => (
              <ProjectCard p={p} />
            ))}
          </div>
        </div>
      </Container>
    );
  }
}

export default Home;
