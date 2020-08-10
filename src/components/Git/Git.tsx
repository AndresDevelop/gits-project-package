import React from "react";
import MarkdownEditor from "@uiw/react-markdown-preview";
import { WithLoading } from "@andresdevelop/ui-components";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { GitDetailType } from "../store/actions/actions";

interface gitProps {
  git: GitDetailType;
}
const useStyles = makeStyles({
  title: {
    lineHeight: "100px",
    color: "#1D1FDD",
    fontSize: "120px",
    marginBottom: "60px",
  },
  date: {
    lineHeight: "13px",
    fontSize: "10px",
    color: "#000000",
    paddingRight: "20px",
  },

  datetext: {
    color: "#1D1FDD",
    lineHeight: "13px",
    fontSize: "10px",
    paddingRight: "20px",
  },
});

const Git: React.FC<gitProps> = ({ git }) => {
  console.log(git);
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h1" align="left" className={classes.title}>
        {git && git.description}
      </Typography>
      <MarkdownEditor source={git.content}></MarkdownEditor>
    </React.Fragment>
  );
};
export default WithLoading(Git);
