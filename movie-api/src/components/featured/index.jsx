import React from "react";
import play from "../../img/play.png";
import info from "../../img/info-2-16.ico";
import "./featured.css";

const Featured = ({ item }) => {
  let date = new Date(item.first_air_date);

  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let votes = item.vote_average;

  return (
    <div
      className="featured"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${item.backdrop_path}")`,
      }}
    >
      <div className="featured__vertical">
        <div className="featured__horizontal">
          <h1>{item.original_name}</h1>
          <div className="featured__infos">
            <p className="featured__infos__votes">{votes.toFixed(1)} votes</p>
            <p className="featured__infos__year">{date.getFullYear()}</p>
            <p className="featured__infos__seasons">
              {item.number_of_seasons}{" "}
              {item.number_of_seasons !== 1 ? "seasons" : "season"}
            </p>
          </div>
          <div className="featured__description">
            <p>{item.overview}</p>
          </div>
          <div className="featured__buttons">
            <button className="featured__buttons__play">
              <img src={play} alt="" />
              Play
            </button>
            <button className="featured__buttons__moreinfo">
             <img src={info} alt="" />More Info
            </button>
          </div>
          <div className="featured__genres">
            <p>
              <strong>Genres: </strong>
              {genres.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
