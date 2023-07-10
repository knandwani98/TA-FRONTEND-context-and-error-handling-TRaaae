import React from "react";
import withSearch from "./withSearch";
import { Link, withRouter } from "react-router-dom";
import articles from "./data/articles.json";

const Articles = ({ state, handleChange }) => {
  let filteredArticles = articles.filter((article) => {
    return article.title.toLowerCase().includes(state.searchTerm);
  });

  return (
    <>
      <input
        placeholder="Search"
        className="search"
        value={state.searchTerm}
        onChange={handleChange}
      />

      <ul className="articles">
        {filteredArticles.map((article) => (
          <li>
            <Link to={"articles/" + article.slug}>
              <h3>{article.title}</h3>
            </Link>
            <small>{article.author}</small>
          </li>
        ))}
      </ul>
    </>
  );
};

export default withRouter(withSearch(Articles));
