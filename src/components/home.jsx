import { useState } from "react";
import Movie from "./movie";

const Home = () => {
  const data = [
    {
      id: 1,
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/89885e865aced0319d9475fbc96233bb9f33fb9254e11f043808a43a565655a9._V_SX300_.jpg",
      name: "Lorem",
      text: "(1985)",
    },
    {
      id: 2,
      imageUrl:
        "https://files.cinerama.uz/images/posters/2021/11/19/60c6afba-c627-4b10-ba7c-2a6a3a64803f.jpg",
      name: "Joshua",
      text: "(2020)",
    },
    {
      id: 3,
      imageUrl:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/12932915-531c-4472-b77d-7edcd52cf692/300x450",
      name: "Alemdar",
      text: "(2005)",
    },
    {
      id: 4,
      imageUrl:
        "https://files.cinerama.uz/images/posters/2021/11/19/60c6afba-c627-4b10-ba7c-2a6a3a64803f.jpg",
      name: "Polat",
      text: "(1995)",
    },
    {
      id: 5,
      imageUrl: "https://images2.info/i2/125268/4432433-poster.jpg",
      name: "Memati",
      text: "(2012)",
    },
    {
      id: 6,
      imageUrl:
        "https://chillopedia.com/wp-content/uploads/2019/07/Camp-Hell-2010-300x400.jpg",
      name: "Zaza",
      text: "(2015)",
    },
  ]

  const [movies, setMovies] = useState(data);

  const onChange = () => {
    console.log("changet");
  };

  const onTextChange = (e) => {
    const text = e.target.value;
    const filteredMovies = data.filter((m) =>
      m.name.toLowerCase().includes(text.toLowerCase())
  );

  setMovies(filteredMovies);
};


  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Movies Search Engine</h1>
        </div>
        <div className="search">
          <input
            onChange={onTextChange}
            type="text"
            placeholder="Write.."
          />
          <button onClick={onChange} className="btn-search">
            Search
          </button>
        </div>
        <div className="movies-container">
          {movies.map((m) => (
            <Movie
              key={m.id}
              title={m.name}
              year={m.text}
              imageUrl={m.imageUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home