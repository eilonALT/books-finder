import { useState, useEffect } from 'react';

const WishList = (props) => {
    const [books, setBooks] = useState([])
    
    useEffect = (() => {
        console.log("here")
        let item = localStorage.getItem(WishList)
        setBooks(item)
    },[])
    
    return (<div>
        <h1>here</h1>
        {books.map(book => {
            <h1>{book.volumeInfo.title}</h1>
        })}
    </div>);
}

export default WishList;