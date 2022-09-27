import React, { useState } from "react";
import "./movieRow.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const MovieRow = ({ title, movieList }) => {
  const img = "https://image.tmdb.org/t/p";
  const [arrows, setArrows] = useState(30);

  const handleClickBack = () => {
    let scrollLeft = arrows + Math.round(window.innerWidth / 2);

    if (scrollLeft > 30) {
      scrollLeft = 30;
    }

    setArrows(scrollLeft);
  };

  const handleClickForward = () => {
    let scrollRight = arrows - Math.round(window.innerWidth / 2);
    let listWidth = movieList.results.length * 300;

    if (window.innerWidth - listWidth > scrollRight) {
      scrollRight = window.innerWidth - listWidth - 40;
    }

    setArrows(scrollRight);
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow__left" onClick={handleClickBack}>
        <ArrowBackIosNewIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow__right" onClick={handleClickForward}>
        <ArrowForwardIosIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow__listarea">
        <div className="movieRow__list__single" style={{ marginLeft: arrows }}>
          {movieList.results.length > 0 &&
            movieList.results.map((movie, key) => (
              <div key={key} className="movieRow__list__single__img">
                <img
                  src={`${img}/w300${movie.poster_path}`}
                  alt={movie.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
