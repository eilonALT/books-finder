import React, { useState, useCallback } from "react";
import { useEffect } from "react";
import BookCard from "../BookCard";
import Pagination from "../Pagination";
const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("")
    const [books, setBooks] = useState([])
    const [startIndex, setstartIndex] = useState(1);
    const [wishList, setWishList] = useState([])
    useEffect = (() => {
        localStorage.setItem("wishList", wishList)
    }, [wishList])
    const addToWish = (book) => {
        wishList.push(book);
    }
    const HandleClearClick = () => {
        setSearchValue("")
        if (searchValue === "") {
            setBooks([])
        }
    }

    const HandleSearchClick = () => {
        setstartIndex(1)
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&maxResults=20&startIndex=${startIndex}`)
            .then(res => res.json())
            .then(data => {
                setBooks(data.items)
            })
        console.log(searchValue)
    }

    const pageNext = () => {
        let newStartIndex = startIndex + 20
        setstartIndex(newStartIndex)
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&maxResults=20&startIndex=${newStartIndex}`)
            .then(res => res.json())
            .then(data => {
                setBooks(data.items)
            })
    }

    const pagePrev = () => {
        let newStartIndex;

        if (startIndex - 20 < 1) {
            newStartIndex = 1
            setstartIndex(1)
        }
        else {
            newStartIndex = startIndex - 20
            setstartIndex(newStartIndex)
        }
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&maxResults=20&startIndex=${newStartIndex}`)
            .then(res => res.json())
            .then(data => {
                setBooks(data.items)
            })
    }

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
                        <BookCard addToWish={addToWish} book={book} key={`${book.id}-key`} />
                    )
                }) : <p>didn't find anything...</p>}
            </div>
            {books?.length > 0 ? <Pagination pageNext={pageNext} pagePrev={pagePrev} /> : null}
        </div>
    )
}

export default SearchBar;