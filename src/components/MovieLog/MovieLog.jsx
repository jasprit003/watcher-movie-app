import React from "react";
import styled from "styled-components";

import Tooltip from "../Tooltip/Tooltip";
import DeleteMovie from "./DeleteMovie";

const MovieLog = ({ movieLog, setMovieLog }) => {
  const [currMovieId, setCurrMovieId] = React.useState(null);

  return (
    <Wrapper>
      {movieLog.map((movie) => (
        <MovieCard
          onMouseEnter={() => setCurrMovieId(movie.imdbID)}
          onMouseLeave={() => setCurrMovieId(null)}
          key={movie.imdbID}
        >
          {currMovieId === movie.imdbID && (
            <>
              <Tooltip isOpen={currMovieId}>{movie.Title}</Tooltip>
              <DeleteMovie movie={movie} setMovieLog={setMovieLog} />
            </>
          )}
          <Image src={movie.Poster} alt={movie.Title + " cover"} />
        </MovieCard>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  width: 70%;
  background: #f6e9df;
  padding: 1rem;
  border-radius: 1rem;
  margin: 0 auto;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
`;

const MovieCard = styled.div`
  position: relative;
  width: 160px;
  height: 237px;
  border-radius: 0.5rem;
  box-shadow: 2px 4px 8px black;
  transition: 300ms ease-in;
  cursor: pointer;

  &:hover {
    transform: scale(1) translateY(-40px);
    z-index: 999999;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
`;

export default MovieLog;
