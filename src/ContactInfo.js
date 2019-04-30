import React from "react";
import upworkIcon from "./upwork-icon.png";
import { Icon } from "semantic-ui-react";

const ContactInfo = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}
  >
    <div>
      <Icon name="github" color="white" />
      <a href="https://github.com/josephmarshall">github</a>
      <span style={{ margin: "0 5px 0 5px" }}>{"|"}</span>
      <Icon name="mail" color="white" />
      <span>c.r.larsen@hotmail.com</span>
    </div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Icon name="linkedin" color="white" />
      <a href="https://www.linkedin.com/in/christopher-larsen-3b74ab184/"> Linkedin</a>
      <span style={{ margin: "0 5px 0 5px" }}>{"|"}</span>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          color="white"
          src={upworkIcon}
          style={{ width: "16px", height: "14px" }}
        />
        <a href="
        https://www.upwork.com/o/profiles/users/_~0198bb5ba99646d6e1/"> Upwork </a>
        <span style={{ margin: "0 5px 0 5px" }}>{"|"}</span>
        <span>
          <Icon name="phone square" color="white" />
          801-367-5667
        </span>
      </div>
    </div>
  </div>
);

export default ContactInfo;
