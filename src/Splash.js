import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Splash = () => (
  <div
    style={{
      height: "100vh",
      width: "100vw",
      background: "black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <Link to="/Home">
      <Button style={{ borderRadius: "25px", width: "200px", color: "black" }}>
        Enter Site
      </Button>
    </Link>
  </div>
);

export default Splash;
