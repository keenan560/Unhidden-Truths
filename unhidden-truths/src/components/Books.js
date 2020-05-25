import React from "react";
import books from "./bookData";

export default class Books extends React.Component {

    constructor(props) {
        super(props);
        this.getModal = this.getModal.bind(this);
        this.state = { books: books }
    }
    getModal() {

        return (
            <div className='alert'></div>
        )



    }

    renderBooks(books) {

        return (
            <div className='row'>
                {books.map(book => (
                    <button id='modal-button' type="button" class="btn btn-sm btn-secondary" data-toggle="modal" data-target="#exampleModal">
                        <div className='card mx-3 my-3 animate__animated animate__fadeIn animate__slow'>
                            <img src={book.image} className='card-img-top shadow-lg' alt={book.title}></img>
                        </div>
                    </button>

                ))}
            </div>

        )

    }

    render() {
        return (
            <div className='container'>
                {this.renderBooks(this.state.books)}




                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}