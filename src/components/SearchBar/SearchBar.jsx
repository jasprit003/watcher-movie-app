import React from "react";
import styled from "styled-components";
import SearchResult from "./SearchResult";

const SearchBar = ({ setSearchTerm, movieData, searchData, setMovieLog }) => {
  const [userInput, setUserInput] = React.useState("");

  const changeHandler = (value) => {
    const newValue = value;
    setUserInput(newValue);
    // console.log(newValue);
    setSearchTerm(newValue);
  };

  // function submitHandler(event) {
  //   event.preventDefault();
  //   const newUserValue = userInput;
  //   movieInput(newUserValue);
  //   setUserInput("");
  // }
  return (
    <Wrapper
    // onSubmit={(event) => {
    //   event.preventDefault;
    //   submitHandler(event);
    // }}
    >
      <Input
        required
        type="text"
        id="searchBar"
        name="searchBar"
        placeholder="Find a film"
        value={userInput}
        onChange={(event) => changeHandler(event.target.value)}
      />

      {searchData && (
        <SearchResult
          searchData={searchData}
          setMovieLog={setMovieLog}
          setSearchTerm={setSearchTerm}
          setUserInput={setUserInput}
          userInput={userInput}
        />
      )}
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // border: 2px solid white;
  margin-top: 5rem;
  margin-bottom: 7rem;
`;
const Input = styled.input`
  background-image: url("https://img.icons8.com/sf-black/100/ffffff/search.png");
  background-position: 10px 10px;
  background-repeat: no-repeat;
  width: 180px;
  height: 48px;
  background: #27292a;
  border-radius: 1rem;
  color: var(--text-color);
  padding: 0px 45px 0px 45px;
  // outline: none;
  border: none;
  font-size: 16px;
  // box-shadow: 0px 2px 4px hsl(220deg 100% 50%);

  transition: 250ms ease-in;

  &::placeholder {
    color: var(--text-color);
  }

  &:focus {
    outline: none;
    width: 330px;
    box-shadow: 0px 1px 1px hsl(220deg 100% 50%),
      0px 2px 2px hsl(220deg 100% 50%), 0px 4px 4px hsl(220deg 100% 50%),
      0px 8px 8px hsl(220deg 100% 50%);
  }
`;
