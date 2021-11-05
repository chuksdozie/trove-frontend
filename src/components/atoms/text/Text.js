import React from "react";
import { Typography } from "@mui/material";
import { useStyles } from "./style";

const Text = (props) => {
  const classes = useStyles(props);
  const {
    disabled,
    value,
    fontSize,
    fontWeight,
    color,
    required,
    onClick,
    defaultValue,
  } = props;
  return (
    <div>
      <Typography
        required={required}
        fullWidth={true}
        className={classes.primary}
        disabled={disabled}
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={color}
        onClick={onClick}
        defaultValue={defaultValue}
      >
        {value}
      </Typography>
    </div>
  );
};

export default Text;
