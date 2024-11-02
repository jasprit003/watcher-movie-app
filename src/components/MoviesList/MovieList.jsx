import styled from "styled-components";
import { data } from "../data";
import MovieCard from "./MovieCard";

const MovieList = () => {
  return (
    <Wrapper>
      {data.map((movie) => (
        <MovieCard movie={movie} key={movie.id}/>
      ))}
    </Wrapper>
  );
};

export default MovieList;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  // justify-items: center;
  gap: 3rem 3rem;
  padding-left: 2rem;
`;
