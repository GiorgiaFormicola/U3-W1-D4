import { Component } from "react";
import CommentList from "./CommentList";

const URL = "https://striveschool-api.herokuapp.com/api/comments/";
const key =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTczM2Q1ODg1ZTNiMTAwMTViNWVkOTIiLCJpYXQiOjE3NjkxNjAwMjQsImV4cCI6MTc3MDM2OTYyNH0.44JOk6CRTq-SU-frlMxtHzTbDZh8D09nLZXgdFFal2A";

class CommentArea extends Component {
  state = {
    commentsArray: [],
  };

  bookURL = URL + this.props.bookID;

  getComments = () => {
    fetch(this.bookURL, {
      headers: {
        Authorization: key,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error in getting the book comments");
        }
      })
      .then((bookCommentsArray) => {
        this.setState({
          commentsArray: bookCommentsArray,
        });
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };
  componentDidMount() {
    this.getComments();
  }
  render() {
    return <CommentList commentsArray={this.state.commentsArray}></CommentList>;
  }
}

export default CommentArea;
