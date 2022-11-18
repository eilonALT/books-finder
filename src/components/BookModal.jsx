const BookModal = ({ book, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-img">
                <img src={book.image
                    ? book.image
                    : "https://via.placeholder.com/150"} alt={book.title} />
            </div>
            <div className="modal-content">
                <div className="modal-header">
                    <h2>{book.title}</h2>
                    <button onClick={onClose}>X</button>
                </div>
                <div className="modal-body">
                    <p>{book.description}</p>
                </div>
            </div>
        </div>
    );
}

export default BookModal;