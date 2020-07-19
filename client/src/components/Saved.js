import React from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

function Saved(props) {
    return (
        <Col size="md-6 sm-12">
            <Jumbotron>
                <h1>Books On My List</h1>
            </Jumbotron>
            {props.books.length ? (
                <List>
                    {props.books.map(book => {
                        return (
                            <ListItem key={book._id}>
                                <a href={"/books/" + book._id}>
                                    <strong>
                                        {book.title} by {book.author}
                                    </strong>
                                </a>
                                <DeleteBtn onClick={() => { }} />
                            </ListItem>
                        );
                    })}
                </List>
            ) : (
                    <h3>No Results to Display</h3>
                )}
        </Col>
    )
}

export default Saved;