import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { Component } from "react";

class BookList extends Component {
  state = {
    searchValue: "",
  };
  render() {
    return (
      <>
        <Container className="mb-4">
          <Row className="justify-content-center">
            <Col className="col-12 p-0">
              <Form>
                <Form.Control
                  type="text"
                  placeholder="Search your book here..."
                  value={this.state.searchValue}
                  onChange={(e) => {
                    this.setState({
                      searchValue: e.target.value,
                    });
                  }}
                />
              </Form>
            </Col>
          </Row>
        </Container>
        <Container className="bg-secondary rounded-4 py-4">
          <Row className="justify-content-center g-4 mx-1">
            {this.props.booksList.filter((b) => b.title.toLowerCase().includes(this.state.searchValue)).length === 0 ? (
              <p className="mb-0 text-center text-light">We're sorry, no books matching your search!</p>
            ) : (
              this.props.booksList
                .filter((b) => b.title.toLowerCase().includes(this.state.searchValue))
                .map((book) => {
                  return <SingleBook book={book} key={book.asin} />;
                })
            )}
          </Row>
        </Container>
      </>
    );
  }
}

export default BookList;
