import { useState, useEffect } from "react";
import SearchBar from "./SearchBar.jsx/Searchbar";
const Home = () => {
    let username = localStorage.getItem("username")

    return (
        <div className='home'>
            <h1>Home</h1>
            <h2>Welcome {username} !</h2>
            <SearchBar/>
        </div>
    );
}

export default Home;