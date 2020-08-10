import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "../../pages/Home/Home";
import { useDispatch } from "react-redux";

import { setAuthAction } from "../../components/store/actions/actions";

import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "80px",
  },
  button: {
    border: "none",
    background: "transparent",
    borderRadius: "0px",
    borderBottom: "5px solid #1D1FDD",
    color: "#666666",
    fontSize: "18px",
    textDecoration: "none",
    outline: "none",
    cursor: "pointer",
  },
});

interface HeaderProps {
  isUserAuthorized?: boolean;
}
const Header: React.FC<HeaderProps> = ({ isUserAuthorized }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const authDispatch = React.useCallback(
    (auth) => dispatch(setAuthAction(auth)),
    [dispatch]
  );
  return (
    <Grid item xs={12} lg={12} className={classes.root}>
      <Link to="/" className={classes.button}>
        Home
      </Link>
      {!isUserAuthorized ? (
        <button
          className={classes.button}
          type="button"
          onClick={() => authDispatch(true)}
        >
          <strong>Sign In</strong>
        </button>
      ) : (
        <button
          className={classes.button}
          type="button"
          onClick={() => authDispatch(false)}
        >
          <strong>Log Out</strong>
        </button>
      )}
    </Grid>
  );
};

export default connect(Header);
