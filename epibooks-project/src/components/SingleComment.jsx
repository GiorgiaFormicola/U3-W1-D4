import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

class SingleComment extends Component {
  state = {};
  render() {
    return <ListGroup.Item>{this.props.comment}</ListGroup.Item>;
  }
}

export default SingleComment;
