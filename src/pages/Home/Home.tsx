/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  getGitsAction,
  getUsergetGitsAction,
  setUsernameAction,
} from "../../components/store/actions/actions";
import { ApplicationState } from "../../components/store/types";
import Profile from "../../components/profile/Profile";
import Search from "../../components/Search/Search";
import Gits from "../../components/Git/Gits";

const useStyles = makeStyles({
  text: {
    lineHeight: "100px",
    color: "#1D1FDD",
    fontSize: "120px",
    marginBottom: "60px",
  },
  secondaryText: {
    color: "#565656",
    fontSize: "12px",
    lineHeight: "24px",
  },
});

const Home: React.FC<ApplicationState> = ({
  user,
  gits,
  username,
  isloading,
  isUserAuthorized,
}) => {
  const dispatch = useDispatch();
  const userDispatch = React.useCallback(
    () => dispatch(getUsergetGitsAction(username)),
    [dispatch, username]
  );
  const gitsDispatch = React.useCallback(
    () => dispatch(getGitsAction(username)),
    [dispatch, username]
  );

  const setUsernameDispatch = React.useCallback(
    (newUser: string) => dispatch(setUsernameAction(newUser)),
    [dispatch]
  );
  React.useEffect(() => {
    gitsDispatch();
    userDispatch();
  }, [dispatch, gitsDispatch, userDispatch]);

  const classes = useStyles();
  const profileProps = { user, isUserAuthorized };
  const gitsProps = { gits };

  return (
    <Grid item xs={12} lg={6}>
      <Typography variant="h1" align="left" className={classes.text}>
        Blog msco.
      </Typography>
      <Typography
        variant="subtitle2"
        align="left"
        className={classes.secondaryText}
      >
        Explore the unknown. Uncover what matters. Prototype, test, repeat.
        Combine intuition with evidence. Design with intent and build it right.
      </Typography>
      <Search placeholder="Keyword...." searchChild={setUsernameDispatch} />
      <Profile {...profileProps} isLoading={isloading} isError={false} />
      <Gits {...gitsProps} isLoading={isloading} isError={false} />
    </Grid>
  );
};

export const connect = (WrappedComponent: any) => {
  const hocs = () => {
    const {
      gits,
      user,
      git,
      username,
      isloading,
      isUserAuthorized,
    } = useSelector(
      (state: ApplicationState) => ({
        gits: state.gits,
        user: state.user,
        git: state.git,
        username: state.username,
        isloading: state.isloading,
        isUserAuthorized: state.isUserAuthorized,
      }),
      shallowEqual
    );
    const props = { user, gits, git, username, isloading, isUserAuthorized };
    return <WrappedComponent {...props} />;
  };

  return hocs;
};

export default connect(Home);
