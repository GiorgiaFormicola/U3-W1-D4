import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

class CommentArea extends Component {
  state = {};
  render() {
    return (
      <ListGroup variant="flush" data-bs-theme="dark" className="border-top border-bottom border-1 mt-3 mb-1">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>
    );
  }
}

export default CommentArea;
