import React, { useState } from "react";
import BookCard from "../BookCard";
import Pagination from "../Pagination";
const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("")
    const [books, setBooks] = useState([])


    const HandleClearClick = () => {
        setSearchValue("")
        if (searchValue === "") {
            setBooks([])
        }
    }

    const HandleSearchClick = () => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&maxResults=20`)
            .then(res => res.json())
            .then(data => {
                setBooks(data.items)
            })
        console.log(searchValue)
    }

    // useEffect(() => {
    //     console.log("[SearchBar]=> useEffect")
    // }, [books])

    return (
        <div className="searchBar">
            <input type="text" placeholder="book name..." value={searchValue} onChange={e => {
                setSearchValue(e.target.value)
            }} />
            <button onClick={HandleSearchClick} style={{ backgroundColor: "rgb(120, 226, 104)" }}>Search</button>
            <button onClick={HandleClearClick}>Clear</button>
            <div className="books-container">
                {books ? books.map((book) => {
                    return (
                        <BookCard book={book} key={`${book.id}-key`} />
                    )
                }) : <p>didn't find anything...</p>}
            </div>
            <Pagination/>
        </div>
    )
}

export default SearchBar;