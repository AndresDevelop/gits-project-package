import React from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import {
  getGitDetailAction,
  getUsergetGitsAction,
} from "../../components/store/actions/actions";
import { ApplicationState } from "../../components/store/types";
import Grid from "@material-ui/core/Grid";

import Profile from "../../components/profile/Profile";
import { connect } from "../Home/Home";

import GitComponent from "../../components/Git/Git";

const Git: React.FC<ApplicationState> = ({
  user,
  git,
  username,
  isloading,
  isUserAuthorized,
}) => {
  const { id } = useParams();
  const profileProps = { user, isUserAuthorized };
  const gitsProps = { git };

  const dispatch = useDispatch();
  const userDispatch = React.useCallback(
    () => dispatch(getUsergetGitsAction(username)),
    [dispatch, username]
  );

  const gitsDispatch = React.useCallback(
    () => dispatch(getGitDetailAction(id)),
    [dispatch, id]
  );
  React.useEffect(() => {
    gitsDispatch();
    userDispatch();
  }, [dispatch, gitsDispatch, id, userDispatch]);

  return (
    <Grid item xs={12} lg={6}>
      <GitComponent {...gitsProps} isLoading={isloading} isError={false} />
      <Profile {...profileProps} isLoading={isloading} isError={false} />
    </Grid>
  );
};

export default connect(Git);
