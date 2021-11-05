import React from "react";
import { useStyles } from "./style";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";

const PrimaryButton = (props) => {
  const classes = useStyles(props);
  const { label, type, disabled, onClick } = props;
  return (
    <div>
      <Grid container xs={12}>
        <Button
          className={classes.primary}
          variant="contained"
          fullWidth={true}
          type={type}
          disabled={disabled}
          onClick={onClick}
        >
          {label}
        </Button>
      </Grid>
    </div>
  );
};

export default PrimaryButton;
