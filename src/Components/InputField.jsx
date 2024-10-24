import { TextField } from "@mui/material";
import React from "react";

function InputField({
  label,
  value,
  onChange,
  inputProps,
  type,
  error,
  helperText,
  register,
}) {
  return (
    <TextField
      label={label}
      value={value}
      type={type}
      onChange={onChange}
      required
      {...register}
      inputProps={inputProps}
      size="small"
      sx={{
        "& .MuiOutlinedInput-root": {
          "&:hover fieldset": {
            borderColor: "secondary.main",
          },
          "&.Mui-focused fieldset": {
            borderColor: "secondary.main",
          },
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "secondary.main",
        },
      }}
    />
  );
}

export default InputField;
