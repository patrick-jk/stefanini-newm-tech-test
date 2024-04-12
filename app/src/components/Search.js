import React from "react";
import './css/Search.css';

const Search = ({ search, setSearch }) => {
    return (
        <div className="search">
        <input className="input-field" placeholder="Pesquisar Tarefa..."
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        </div>
    );
}

export default Search