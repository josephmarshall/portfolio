import React from "react";
import { Transition } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import styles from "./styles";
import projectCardStyle from "./projectCardStyle.css";

class Project extends React.Component {
  state = { visible: false };

  componentDidMount() {
    this.setState({ visible: true });
  }

  browse = p => {
    this.setState({ visible: !this.state.visible });
    setTimeout(() => this.props.history.push(`/projects/${p.name}`), 100);
  };

  render() {
    const { p } = this.props;
    return (
      <Transition.Group animation="browse" duration="200">
        {this.state.visible && (
          <div>
            <div
              className="projectCard"
              style={styles.projectCard}
              onClick={() => this.browse(p)}
            >
              <img src={p.image} style={styles.projectCardImage} />
              <div style={{ padding: "5px" }}>
                <div style={styles.projectCardTitle}>{p.name}</div>
                <p style={styles.projectCardDescription}>{p.description}</p>
              </div>
            </div>
          </div>
        )}
      </Transition.Group>
    );
  }
}

export default withRouter(Project);
