import React from "react";
import { Button } from "@mui/material";
import { useStyles } from "./style";

const SecondaryButton = (props) => {
  const classes = useStyles(props);
  const { label, type, disabled, onClick } = props;
  return (
    <div>
      <Button
        variant="outlined"
        fullWidth={true}
        className={classes.secondary}
        type={type}
        disabled={disabled}
        onClick={onClick}
      >
        {label}
      </Button>
    </div>
  );
};

export default SecondaryButton;
