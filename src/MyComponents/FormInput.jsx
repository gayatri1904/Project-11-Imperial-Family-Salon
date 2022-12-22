import { useState } from "react";
import "../MyResources/FormInput.css"
import React from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div class="formInput">
      <input
      class="inputField"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        className='inputField'
      />
      <span class="error" >{errorMessage}</span>
    </div>
  );
};

export default FormInput;
