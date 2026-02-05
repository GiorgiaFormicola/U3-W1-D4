import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// import Badge from "react-bootstrap/Badge";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Col className="col-12 col-md-6 col-lg-3">
        <Card
          bg="dark"
          text="light"
          className={"shadow rounded-4 overflow-hidden h-100 border-secondary" + (this.state.selected ? " border-danger border-4" : "")}
        >
          <Card.Img
            variant="top"
            src={this.props.book.img}
            alt="Book cover"
            className="h-75"
            onClick={() => {
              this.setState({
                selected: !this.state.selected,
              });
            }}
          />
          <Card.Body className="d-flex flex-column justify-content-center">
            <Card.Title className="text-center">{this.props.book.title}</Card.Title>
            {/* <Card.Text className="d-flex justify-content-between align-items-baseline">
            $ {this.props.book.price}
            <Badge bg="secondary" text="light" className="w-25 py-2">
              {this.props.book.category}
            </Badge>
          </Card.Text> */}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
