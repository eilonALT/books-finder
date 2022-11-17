import React, { useState, useEffect } from "react";


const SearchBar = () => {
    const [searchValue, setsearchValue] = useState("")

    const HandleInputChange = (event) => {
        setsearchValue(event.target.value)
    }
    const HandleclearClick = () => {
        setsearchValue("")
    }
    useEffect(() => {
        fetch('https://www.googleapis.com/books/v1/volumes?q=hhe').then(res => res.json()).then()
    })
    return (
        <div>
            <input type="text" value={searchValue} onChange={HandleInputChange} />
            <br />
            <button onClick={HandleclearClick}>Clear</button>

        </div>
    )
}

export default SearchBar;