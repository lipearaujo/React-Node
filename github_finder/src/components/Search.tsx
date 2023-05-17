import { BsSearch } from "react-icons/bs";
import { useState, KeyboardEvent } from "react";
import classes from "./Search.module.css"

type SearchProps = {
  loadUser: (username: string) => Promise<void>;
};

const Search = ({ loadUser }: SearchProps) => {
  const [username, setUsername] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if(e.key ===  "Enter") {
        loadUser(username);
    }
  }

  return (
    <div className={classes.search}>
      <h1>Search for a user:</h1>
      <p>Find your best repositories</p>
      <div className={classes.search_container}>
        <input
          type="text"
          placeholder="Enter username"
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(username)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
