import SearchBar from "./SearchBar.jsx/Searchbar";

const Home = () => {
    let username = localStorage.getItem("username")
    
    return (
        <div className='home'>
            <h1>Welcome {username} !</h1>
            <SearchBar />
        </div>
    );
}

export default Home;