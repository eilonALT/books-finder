import React, { useState, useEffect } from "react";


const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("")
    const [books, setBooks] = useState([])


    const HandleClearClick = () => {
        setSearchValue("")
        if (searchValue === "") {
            setBooks([])
        }
    }

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&maxResults=20`)
            .then(res => res.json())
            .then(data => {
                setBooks(data.items)
            })
        console.log(searchValue)
    }, [searchValue])
    return (
        <div>
            <input type="text" onChange={e => {
                setSearchValue(e.target.value)
            }} />
            <button onClick={HandleClearClick}>Clear</button>
            <ul>
                {books ? books.map((book) => {
                    return (
                        <li key={book.id}>
                            <h5>{book.volumeInfo.title}</h5>
                            <img src={book.volumeInfo?.imageLinks?.thumbnail} alt="" />
                        </li>
                    )
                }) : null}
            </ul>
        </div>
    )
}

export default SearchBar;