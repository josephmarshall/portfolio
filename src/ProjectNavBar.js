import React from "react";
import { Menu, Image } from "semantic-ui-react";
import { projectData } from "./projectData";
import { Link } from "react-router-dom";
import chris from "./chris_portrait.JPG";

const ProjectNavBar = () => (
  <Menu>
    <Menu.Item
      style={{
        padding: "5px",
        background: "black",
        borderRight: "solid white 1px"
      }}
    >
      <Link to={`/Home`}>
        <Image
          style={{ height: "50px", width: "50px", objectFit: "contain" }}
          src={chris}
        />
      </Link>
    </Menu.Item>
    {projectData.map(p => (
      <Menu.Item
        style={{
          padding: "5px",
          background: "black",
          borderRight: "solid white 1px"
        }}
      >
        <Link to={`/projects/${p.name}`}>
          <Image
            style={{ height: "50px", width: "50px", objectFit: "contain" }}
            src={p.image}
          />
        </Link>
      </Menu.Item>
    ))}
  </Menu>
);

export default ProjectNavBar;
