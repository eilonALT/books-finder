import React, {useState,useEffect} from "react";

const Pagination =(props)=> {
    const [startIndex,setstartIndex] = useState(0);
/*useEffect= ()=>{
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&maxResults=20&startIndex=${startIndex}`).then(res => res.json).then(data =>setUserData(data);)
}*/
const NextClick = ()=>{
    alert("Next button pressed!")
}
const PrevClick = ()=>{
    alert("Previous buttoon pressed!")
}
return(
    <div>
        <button disabled onClick={PrevClick} style= {{color: "grey"}}>Previous</button>
        <button onClick={NextClick} style={{color : "rgb(120, 226, 104)"}}>Next</button>
    </div>
)

}

export default Pagination;