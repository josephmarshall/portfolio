import React from "react";
import { projectData } from "./projectData";
import { Container, Modal, Button, Icon } from "semantic-ui-react";
import ProjectNavBar from "./ProjectNavBar";
import CryptonHome from "./CryptonHome"

class Project extends React.Component {
  state = { modalOpen: true, sawModalOnce: false }

  handleOpen = () => {
    if (this.props.openTheModal === true)
      this.setState({ modalOpen: true })
  }

  handleClose = () => {
    this.setState({ modalOpen: false, sawModalOnce: true })
  }

  render() {
    const p = projectData.filter(
      project => project.name === this.props.match.params.name
    )[0];

    return (
      <Container>
        <ProjectNavBar />
        {p.name === "CRYPTON" ? (<CryptonHome />) : (
          <>
            {(p.name === "hourglass" || "meine space" || "trollo" || "utube") &&
              <Modal open={this.state.modalOpen} basic onClose={this.handleClose} >
                <Modal.Content>
                  <h1>On projects that require a credentials,
                    login as admin@admin.com w/password: password
                    or register your own user.
            </h1>
                </Modal.Content>
                <Modal.Actions>
                  <Button onClick={() => this.handleClose()} color='green' inverted>
                    <Icon name='checkmark' /> Ok
            </Button>
                </Modal.Actions>
              </Modal>}
            <iframe src={p.link} style={{ height: "80vh", width: "100%" }} />
          </>
        )}
      </Container>
    );
  }
}

export default Project;
