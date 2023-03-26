import React from "react";
import "./Card.css";
import "../../App.css";
import { FaStar, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
const Card = ({ movies }) => {
  return movies.results.map((movie) => (
    <div className="most-popular-item" key={movie.id}>
      <Link to={`/detailPage/${movie.id}`}>
        <div className="card-wrapper">
          <img
            className="most-popular-item-image"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
          />
          <div className="most-popular-item-content">
            <h4 className="most-popular-item-title  text-light">
              {movie.title}
              <br />
              <span className="text-light">{movie.release_date}</span>
            </h4>
            <ul>
              <li>
                <span style={{ color: "var(--color-icons)" }}>
                  <FaStar />
                </span>
                <span className="text-light">{movie.vote_average}</span>
              </li>
              <li>
                <span style={{ color: "var(--color-primary)" }}>
                  <FaDownload />
                </span>
                <span className="text-light">{movie.vote_count}</span>
              </li>
            </ul>
          </div>
        </div>
      </Link>
    </div>
  ));
};

export default Card;
