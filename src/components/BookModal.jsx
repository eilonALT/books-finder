const BookModal = ({ book, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-img">
                <img style={{ width: "250px", height: "400px" }} src={book.volumeInfo.imageLinks.thumbnail
                    ? book.volumeInfo.imageLinks.thumbnail
                    : "https://via.placeholder.com/150"} alt={book.title} />
            </div>
            <div className="modal-content">
                <div className="modal-header">
                    <button className="modal-close" onClick={onClose}>X</button>
                    <h1>{book.volumeInfo.title}</h1>
                    <h2>written by {book.volumeInfo.authors}</h2>
                </div>
                <div className="modal-body">
                    <p>{book.volumeInfo.description.slice(0, 400)}</p>
                    <button>Wish</button>
                </div>
            </div>
        </div>
    );
}

export default BookModal;