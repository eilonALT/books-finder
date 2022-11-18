// import React, {useState,useEffect} from "react";

const Pagination = ({ pageNext, pagePrev }) => {

    // const [startIndex,setstartIndex] = useState(0);
    /*useEffect= ()=>{
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&maxResults=20&startIndex=${startIndex}`).then(res => res.json).then(data =>setUserData(data);)
    }*/
    const NextClick = () => {
        alert("Next button pressed!")
    }
    const PrevClick = () => {
        alert("Previous buttoon pressed!")
    }
    return (
        <div>
            <button onClick={pagePrev} style={{ color: "grey" }}>Previous</button>
            <button onClick={pageNext} style={{ color: "rgb(120, 226, 104)" }}>Next</button>
        </div>
    )

}

export default Pagination;