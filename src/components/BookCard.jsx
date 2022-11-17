const BookCard = ({ book }) => {
    const decription = book.volumeInfo.description?.slice(0, 100)
    return (
        <div className="book-card-container">
            <img className="book-img" src={book.volumeInfo?.imageLinks?.thumbnail} alt="" />
            <div className="book-info">
                <h3>{book.volumeInfo.title}</h3>
                <h5>written by {book.volumeInfo.authors}</h5>
                <p>{decription}...</p>
                <span onClick={() => {
                    alert("not available yet")
                }} style={{ color: "rgb(120, 226, 104)" }}>Read More</span>
            </div>
        </div>
    )
}

export default BookCard