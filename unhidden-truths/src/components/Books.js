import React from "react";
import books from "./bookData";
import Modal from "./Modal";

export default class Books extends React.Component {

    constructor(props) {
        super(props);
        // this.getModal = this.getModal.bind(this);
        this.state = { books: books }
    }

    bookClick(e) {
        e.preventDefault();
        let title = e.target.alt;
        console.log(e.target.alt);  
      
    }

    renderBooks(books) {
        return (
            <div className='row'>
                {books.map(book => (
                    <a onClick={this.bookClick} id='modal-button' type="button" class="" data-toggle="modal" data-target="#exampleModal">
                        <div className='card mx-3 my-3 animate__animated animate__fadeIn animate__slow'>
                            <img src={book.image} className='card-img-top shadow-lg' alt={book.title}></img>
                        </div>
                    </a>
                ))}
            </div>
        )

    }

    render() {
        return (
            <div className='container'>
                {this.renderBooks(this.state.books)}
                <Modal />
            </div>
        )
    }
}