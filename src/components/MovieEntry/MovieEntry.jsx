import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
 from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

const MovieEntry = ({
  movie,
  setSelectMovie,
  selectMovie,
  setMovieLog,
  setSearchTerm,
  setUserInput,
}) => {
  // const [isOpen, setIsOpen] = React.useState(false);

  const submitHandler = () => {
    window.alert("Submitted!");
    setSelectMovie(!selectMovie);
    setMovieLog((prevState) => [...prevState, movie]);
    console.log(movie);
    setSearchTerm("");
    setUserInput("");
  };
  return (
    <Wrapper>
      <ImageWrapper src={movie.Poster} alt={`${movie.Title} cover`} />
      <Hr />
      <DetailsWrapper>
        <Title>{movie.Title}</Title>
        <span>⭐⭐⭐⭐⭐</span>
        <label htmlFor="date">
          <input type="text" id="date" />
        </label>
        <label htmlFor="review">
          <input type="text" id="review" />
        </label>
        <Button onClick={submitHandler}>Submit</Button>
      </DetailsWrapper>
      <ButtonClose
        onClick={() => {
          setSelectMovie(!selectMovie);
          setIsOpen(false);
        }}
      >
        X
      </ButtonClose>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  align-items: center;
  background-color: #27292a;
  height: 280px;
  width: 650px;
  border-radius: 1rem;
  padding: 30px;
  // animation: ${({ isOpen }) => (false ? fadeIn : fadeOut)} 0.3s ease forwards;
`;

const ImageWrapper = styled.img`
  width: 160px;
  height: 237px;
  border-radius: 1rem;
`;

const Hr = styled.hr`
  height: 100%;
  width: 2px;
  border-radius: 1rem;
  color: #999999;
  background: #999999;
`;

const DetailsWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  // align-items: center;
  // border: 2px solid white;
  color: white;
  font-family: helv;
  padding: 0.5rem;
`;

const Title = styled.h4`
  display: inline-block;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 0.5rem;
  color: inherit;
  width: 120px;
  cursor: pointer;
`;

const ButtonClose = styled.button`
  position: absolute;
  top: -30px;
  right: 25px;
  z-index: 100;
  width: 60px;
  height: 40px;
  border-radius: 1rem 1rem 0 0;
  background: inherit;
  border: inherit;
  color: white;
  padding-bottom: 10px;
  cursor: pointer;

  // &:hover {
  // transform: rotate(359deg);
`;

export default MovieEntry;
