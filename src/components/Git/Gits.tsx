import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { UserGitsObj } from "../store/actions/actions";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { WithLoading } from "@andresdevelop/ui-components";
import { formatDate, monthDifference } from "../../utils/date";

interface SimpleListProps {
  gits: UserGitsObj[];
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

const Gits: React.FC<SimpleListProps> = ({ gits }) => {
  const classes = useStyles();

  const isGits = Object.keys(gits).length > 0;
  return isGits ? (
    <List>
      {gits.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <ListItem>
              <ListItemText>
                <div>
                  <span className={classes.date}>
                    {formatDate(item.created_at, "MMMM MM/ YYYY")}•
                  </span>
                  <span className={classes.datetext}>{`${monthDifference(
                    item.created_at
                  )} months ago`}</span>
                </div>
                <span>{item.description}</span>
              </ListItemText>
              <ListItemSecondaryAction>
                <Link to={`/${item.id}`}>READ</Link>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </React.Fragment>
        );
      })}
    </List>
  ) : (
    <span>No gits</span>
  );
};
export default WithLoading(Gits);
