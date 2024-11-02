// import { data } from "../data";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 280px;
  width: 190px;
  position: relative;
  // border: 1px solid black;
  border-radius: 0.5rem;
  box-shadow: 0px 1px 1px #27292a, 1px 2px 2px #27292a, 2px 4px 4px #27292a,
    4px 8px 8px #27292a;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  // border: inherit;
  border-radius: inherit;
`;

const Title = styled.h4`
  color: var(--text-color);
  font-family: "Yatra One", system-ui;
  font-weight: 400;
  font-style: normal;
  font-size: 1.2rem;
  padding: 0.5rem 0px;
  display: inline-block;
  padding-right: 0.4rem;
`;

const Date = styled.p`
  font-family: Helv;
  // font-weight: bold;
  display: inline-block;
  color: var(--text-color);
  opacity: 0.5;
  padding-right: 0.5rem;
  font-size: 0.8rem;
`;

const Span = styled.span`
  display: block;
  color: var(--text-color);
  opacity: 0.5;
`;

const MovieDetails = styled.div`
  border-radius: inherit;
  width: inherit;
  height: 80px;
  position: absolute;
  bottom: 0;
  background: #27292a;
  padding: 4px 0px 0px 8px;
`;

const MovieCard = ({ movie }) => {
  return (
    <Wrapper>
      <Image src={movie.img} alt={movie.name + " cover"} />
      <MovieDetails>
        <Title>{movie.name}</Title>
        <Date>{movie.releaseYear}</Date>
        <Span>{movie.rating}</Span>
      </MovieDetails>
    </Wrapper>
  );
};

export default MovieCard;
