import React from "react";
import * as Icon from "react-feather";
import styled from "styled-components";

const DeleteMovie = ({ movie, setMovieLog }) => {
  const deleteHandler = () => {
    const id = movie.imdbID;
    console.log(id);
    setMovieLog((prevState) => {
      return prevState.filter((movie) => movie.imdbID !== id);
    });
  };

  //   setMovieLog((prevState) => {
  //     return prevState.filter((m) => m.imdbID !== id);
  //   });
  // };
  return (
    <Button onClick={() => deleteHandler()}>
      <Icon.Trash2 color={"#c91142"} size={24} />
    </Button>
  );
};

const Button = styled.button`
  background: none;
  // background-color: #212324;
  position: absolute;
  top: 0;
  right: 0;
  // transform: translate(-50%, -50%);
  // margin: 0.2rem;
  cursor: pointer;
  border-radius: 0.5rem;
  height: 40px;
  width: 40px;
  outline: none;
  border: none;

  & > svg {
    display: block;
    // height: 100%;
    // width: 100%;
  }
`;
export default DeleteMovie;
