import { useState, useCallback } from "react";
import BookModal from "./BookModal";


const BookCard = ({ book }) => {
    const [open, setOpen] = useState(false);
    const decription = book.volumeInfo.description?.slice(0, 100)

    const onClose = useCallback(
        () => {
            setOpen(false);
        },
        [setOpen]
    );

    return (
        <div className="book-card-container">
            <img className="book-img" src={book.volumeInfo?.imageLinks?.thumbnail} alt="" />
            <div className="book-info">
                <h3>{book.volumeInfo.title}</h3>
                <h5>written by {book.volumeInfo.authors}</h5>
                <p>{decription}...</p>
                <span onClick={() => {
                    setOpen(true)
                }} style={{ color: "rgb(120, 226, 104)" }}>Read More</span>
                {open && <BookModal book={book} onClose={onClose} />}
            </div>
        </div>
    )
}

export default BookCard