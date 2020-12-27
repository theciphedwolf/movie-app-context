import React, { useEffect } from "react";

const Genres = () => {
  const genreContext = useContext(GenreContext);

  useEffect(() => {
    genreContext.searchGenres();
  });

  return <p>Genres</p>;
};

export default Genres;
