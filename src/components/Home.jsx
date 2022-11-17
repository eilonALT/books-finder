import { useState, useEffect } from "react";


const Home = () => {
    let username = localStorage.getItem("username")

    return (
        <div className='home'>
            <h1>Home</h1>
            <h2>Welcome {username} !</h2>
        </div>
    );
}

export default Home;