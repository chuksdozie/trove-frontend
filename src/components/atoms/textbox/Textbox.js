import React from "react";
import { TextField } from "@mui/material";
import { useStyles } from "./style";

const TextBox = (props) => {
  const classes = useStyles(props);
  const { placeholder, type, disabled, onClick, helperText, value, onChange } =
    props;
  return (
    <div>
      <TextField
        variant="outlined"
        fullWidth={true}
        className={classes.textbox}
        type={type}
        disabled={disabled}
        onClick={onClick}
        helperText={helperText}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextBox;
