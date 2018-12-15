import React from "react";
import TextField from "@material-ui/core/TextField";

const textInput = ({ input, meta:{error}, ...inputProps }) => (
  <div>
    <TextField
      label={input.label}
      value={input.value}
      error={error ? true : false}
      {...inputProps}
      onChange={input.onChange}
    />
  </div>
);

export default textInput;
