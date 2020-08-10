import React from "react";
import PrivateRoute from "../../components/hooks/PrivateRoute";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { connect } from "../Home/Home";

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
  input: {
    margin: "20px 0px",
    paddingLeft: "20px",
    height: "62px",
    width: "100%",
    border: "1px solid #666666",
    borderRadius: "3px",
    backgroundColor: "#FCFCFC",
  },
  textarea: {
    width: "100%",
    borderRadius: "3px",
    backgroundColor: "#FCFCFC",
    height: "300px",
  },
  button: {
    width: "200px",
    height: "60px",
    border: "none",
    borderRadius: "30px",
    backgroundColor: "#1D1FDD",
    cursor: "pointer",
    color: "white",
    outline: "none",
  },
});

const CreateGits = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h1" className={classes.text}>
        New Post.
      </Typography>
      <Typography
        variant="subtitle2"
        align="left"
        className={classes.secondaryText}
      >
        Explore the unknown. Uncover what matters. Prototype, test, repeat.
        Combine intuition with evidence. Design with intent and build it right.
      </Typography>
      <form>
        <input className={classes.input} placeholder="title" />
        <br />
        <div>
          <textarea className={classes.textarea} placeholder="Text" />
        </div>
        <button type="button" className={classes.button}>
          <span>Publish</span>
        </button>
      </form>
    </div>
  );
};

export default connect(PrivateRoute(CreateGits));
