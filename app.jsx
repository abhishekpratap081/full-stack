import "./App.css";

import superman from "./assets/movies/superman.jpg";
import weapons from "./assets/movies/weapons.jpg";
import sinners from "./assets/movies/sinners.jpg";
import oneBattle from "./assets/movies/one-battle.jpg";
import jurassic from "./assets/movies/jurassic.jpg";
import frankenstein from "./assets/movies/frankenstein.jpg";
import happyGilmore from "./assets/movies/happy-gilmore.jpg";
import thunderbolts from "./assets/movies/thunderbolts.jpg";
import mission from "./assets/movies/mission.jpg";
import f1 from "./assets/movies/f1.jpg";

function App() {
  const movies = [
    {
      rank: 1,
      name: "Superman",
      image: superman,
    },
    {
      rank: 2,
      name: "Weapons",
      image: weapons,
    },
    {
      rank: 3,
      name: "Sinners",
      image: sinners,
    },
    {
      rank: 4,
      name: "One Battle After Another",
      image: oneBattle,
    },
    {
      rank: 5,
      name: "Jurassic World: Rebirth",
      image: jurassic,
    },
    {
      rank: 6,
      name: "Frankenstein",
      image: frankenstein,
    },
    {
      rank: 7,
      name: "Happy Gilmore 2",
      image: happyGilmore,
    },
    {
      rank: 8,
      name: "Thunderbolts*",
      image: thunderbolts,
    },
    {
      rank: 9,
      name: "Mission: Impossible - The Final Reckoning",
      image: mission,
    },
    {
      rank: 10,
      name: "F1",
      image: f1,
    },
  ];

  return (
    <div className="poster">

      {/* Header */}
      <header className="header">
        <div className="imdb">IMDb</div>

        <div className="best">
          <span>BEST OF</span>
          <strong>2025</strong>
        </div>
      </header>

      <h1>MOST POPULAR MOVIES</h1>

      <p className="date">AS OF 12/2/25</p>

      {/* Movies */}
      <div className="movie-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.rank}>

            <img
              src={movie.image}
              alt={movie.name}
              className="movie-image"
            />

            <div className="movie-info">
              <span className="rank">
                {movie.rank}
              </span>

              <span className="movie-name">
                {movie.name}
              </span>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default App;