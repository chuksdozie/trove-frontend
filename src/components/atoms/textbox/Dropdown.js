import React from "react";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useStyles } from "./style";

const mylist = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const Dropdown = (props) => {
  const classes = useStyles(props);
  const { placeholder, type, disabled, onClick, helperText, value, onChange } =
    props;
  return (
    <div>
      <TextField
        id="filled-select-currency"
        select
        label="Select"
        variant="outlined"
        fullWidth={true}
        className={classes.primary}
        type={type}
        disabled={disabled}
        onClick={onClick}
        helperText={helperText}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      >
        {mylist.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default Dropdown;
