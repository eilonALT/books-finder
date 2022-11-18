import { useState, useCallback } from "react";
import SearchBar from "./SearchBar.jsx/Searchbar";
import BookModal from "./BookModal";

const Home = () => {
    let username = localStorage.getItem("username")
    const [open, setOpen] = useState(false);

    const onClose = useCallback(
        () => {
            setOpen(false);
        },
        [setOpen]
    );

    return (
        <div className='home'>
            <h1>Welcome {username} !</h1>
            <SearchBar />
            {/* if (open) {
                <BookModal onClose={onClose} />
            } */}
        </div>
    );
}

export default Home;