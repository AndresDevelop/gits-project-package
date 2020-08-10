import React from "react";
import { Avatar } from "@andresdevelop/ui-components";
import { UserInfoType } from "../store/actions/actions";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import { WithLoading } from "@andresdevelop/ui-components";

interface UserInfoProps {
  user: UserInfoType;
  isUserAuthorized: boolean;
}
const useStyles = makeStyles({
  avatar: {
    display: "flex",
    alignItems: "center",
    margin: "40px 0px",
    justifyContent: "space-between",
    "& > .MuiTypography-root": {
      marginLeft: "40px",
      fontSize: "24px",
      color: "#000000",
    },
  },
  text: {
    marginBottom: "40px",
  },
  button: {
    width: "237px",
    height: "60px",
    border: "none",
    borderRadius: "30px",
    backgroundColor: "#1D1FDD",
    cursor: "pointer",
    marginBottom: "20px",
    "& > span": {
      color: "white",
      fontSize: "24px",
    },
  },
});

const Profile: React.FC<UserInfoProps> = ({ user, isUserAuthorized }) => {
  const classes = useStyles();

  const isUser = Object.keys(user).length > 0;
  return isUser ? (
    <React.Fragment>
      <div className={classes.avatar}>
        <Avatar src={user.avatar_url} />
        <Typography variant="h5">{user.login}</Typography>
        {isUserAuthorized && (
          <Link to="/create-gits">
            <button type="button" className={classes.button}>
              <span>Create new post</span>
            </button>
          </Link>
        )}
      </div>
      <Typography variant="h6" align="left" className={classes.text}>
        {user.bio}
      </Typography>
      <Divider />
    </React.Fragment>
  ) : (
    <span>No data</span>
  );
};

export default WithLoading(Profile);
