import React from "react";
import styled from "styled-components";

import MovieEntry from "../MovieEntry/MovieEntry";

const SearchResult = ({
  movieData,
  searchData,
  setMovieLog,
  setSearchTerm,
  setUserInput,
  userInput,
}) => {
  const [selectMovie, setSelectMovie] = React.useState(false);
  const [movie, setMovie] = React.useState("");
  const clickHandler = (data) => {
    setSelectMovie(!selectMovie);
    setMovie(data);
  };
  return (
    <>
      {selectMovie && (
        <MovieEntry
          setMovieLog={setMovieLog}
          movie={movie}
          setSelectMovie={setSelectMovie}
          selectMovie={selectMovie}
          setSearchTerm={setSearchTerm}
          setUserInput={setUserInput}
        />
      )}
      {userInput && !selectMovie ? (
        <Wrapper>
          <ul>
            {searchData.map((data) => (
              <ListWrapper key={data.imdbID} onClick={() => clickHandler(data)}>
                <ImgWrapper src={data.Poster} alt={data.name + "cover"} />
                <Heading>{data.Title}</Heading>
                <Span>{data.Year}</Span>
              </ListWrapper>
            ))}
          </ul>
        </Wrapper>
      ) : null}
    </>
  );
};

const Wrapper = styled.div`
  // border: 5px solid black;
  width: 60%;
  max-height: 400px;
  padding: 1rem 1.5rem;
  background-color: #27292a;
  border-radius: 1rem;
  margin-top: 1rem;
  overflow: scroll;
  transition: 250ms ease-in;
`;

const ListWrapper = styled.li`
  border: 2px solid white;
  margin-bottom: 0.5rem;
  color: white;
  display: flex;
  // flex-direction: flex-start;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const ImgWrapper = styled.img`
  // display: inline-block;
  width: 75px;
  height: 120px;
  border-radius: inherit;
`;

const Heading = styled.h4`
  display: inline-block;
  font-size: 1.5rem;
`;

const Span = styled.span`
  opacity: 0.5;
`;

const Hr = styled.hr`
  height: 10px;
`;

export default SearchResult;
