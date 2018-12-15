import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
/**
import FormHelperText from '@material-ui/core/FormHelperText';
 * to be wrapped with redux-form Field component
 */
const selectInput = props => {
  const {
    label,
    options,
    input,
    property,
    val,
    multiple,
    meta: { error },
    ...inputProps
  } = props;
  let renderOptions = null;
  if (options) {
    renderOptions = options.map((x, i) => {
      return (
        <MenuItem key={i} value={x[val]}>
          {x[property]}
        </MenuItem>
      );
    });
  }
  return (
    <Select
      style={{ width: "100%" }}
      error={error ? true : false}
      {...inputProps}
      onChange={input.onChange}
      value={input.value}
    >
      {renderOptions}
    </Select>
  );
};
export default selectInput;
