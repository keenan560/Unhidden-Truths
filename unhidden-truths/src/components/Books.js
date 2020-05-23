import React from "react";
import books from "./bookData";

export default class Books extends React.Component {

    constructor(props) {
        super(props);
        this.state = { books: books }
    }

    renderBooks(books) {
        return (
            <div className='row text-center mx-auto'>
                {books.map(book => (
                    <div className='card mx-1 my-1 animate__animated animate__fadeIn animate__slow'>
                        <img src={book.image} className='card-img-top shadow-lg' alt={book.title}></img>
                            {/* <a href={book.image} class="btn book-button btn-sm">Amazon</a>   */}
                    </div>
                ))}
            </div>

        )

    }

    render() {
        return (
            <div className='container'>
                {this.renderBooks(this.state.books)}
            </div>
        )
    }
}