import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import SingleComment from "./SingleComment";

class CommentList extends Component {
  state = {};
  render() {
    return (
      <ListGroup variant="flush" data-bs-theme="dark" className="border-top border-bottom border-1 mt-3 mb-1">
        <SingleComment comment="commento 1"></SingleComment>
        <SingleComment comment="commento 2"></SingleComment>
        <SingleComment comment="commento 3"></SingleComment>
        <SingleComment comment="commento 4"></SingleComment>
      </ListGroup>
    );
  }
}

export default CommentList;
