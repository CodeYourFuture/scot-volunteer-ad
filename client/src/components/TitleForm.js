import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

function TitleForm(props) {
  const classes = useStyles();

  const handleChange = event => {
    props.updateTopic(props.topic.id, event.target.value);
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={props.updateTopic}
    >
      <TextField
        id="outlined-basic"
        label="Topic Title"
        variant="outlined"
        onChange={handleChange}
      />
    </form>
  );
}

export default TitleForm;
