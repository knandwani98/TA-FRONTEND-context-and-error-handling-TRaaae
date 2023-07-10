import React from "react";
import books from "./data/books.json";
import withSearch from "./withSearch";

const Books = ({ state, handleChange }) => {
  let filteredBooks = books.filter((article) =>
    article.title.toLowerCase().includes(state.searchTerm)
  );
  return (
    <div className="page">
      <input
        placeholder="Search"
        className="search"
        value={state.searchTerm}
        onChange={handleChange}
      />
      <ul className="archive">
        {filteredBooks.map((book) => (
          <Book {...book} />
        ))}
      </ul>
    </div>
  );
};

function Book(props) {
  return (
    <li className="book">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>
        Author:<span>{props.author}</span>
      </p>
      <a href={props.website}>
        <button>Buy Now</button>
      </a>
    </li>
  );
}

export default withSearch(Books);
