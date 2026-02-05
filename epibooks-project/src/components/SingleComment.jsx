import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

class SingleComment extends Component {
  render() {
    return (
      <ListGroup.Item className="d-flex justify-content-between px-2 align-items-baseline">
        <span className="fst-italic">"{this.props.commentText}"</span>
        <small className="text-secondary">{this.props.commentRate}/5</small>
      </ListGroup.Item>
    );
  }
}

export default SingleComment;
