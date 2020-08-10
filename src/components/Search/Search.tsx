import React, { useState, ChangeEvent, FormEvent } from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "80px",
  },
  search: {
    border: "none",
    width: "488px",
    height: "62px",
    borderRadius: "31px",
    backgroundColor: "#F5F5F5",
    paddingLeft: "49px",
    marginTop: "52px",
    marginBottom: "46px",
    outline: "none",
  },
  button: {
    width: "200px",
    height: "60px",
    border: "none",
    borderRadius: "30px",
    backgroundColor: "#1D1FDD",
    cursor: "pointer",
    outline: "none",
    "& > span": {
      color: "white",
      lineHeight: "32px",
      fontSize: "24px",
    },
  },
});

interface SearchProps {
  placeholder: string;
  searchChild: (value: string) => void;
}
const Search: React.FC<SearchProps> = ({ placeholder, searchChild }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const classes = useStyles();
  const handleSearchInputChanges = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const callSearchFunction = (
    e: FormEvent<HTMLButtonElement | HTMLFormElement>
  ) => {
    e.preventDefault();
    searchChild(searchValue);
  };
  return (
    <form className={classes.root} onSubmit={callSearchFunction}>
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        placeholder={placeholder}
        className={classes.search}
      />
      <button
        type="submit"
        onClick={callSearchFunction}
        className={classes.button}
      >
        <span>Search</span>
      </button>
    </form>
  );
};
export default Search;
