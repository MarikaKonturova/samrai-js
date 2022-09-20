import React from "react";
import s from "./FormsControls.module.css";
import { Field } from "redux-form";

const FormControl = ({ meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={`${s.formControl} ${hasError ? s.error : ""}`}>
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};
export const createField = (
  placeholder,
  name,
  validators,
  component,
  props = {},
  text = ""
) => (
  <div>
    <Field
      component={component}
      name={name}
      placeholder={placeholder}
      validate={validators}
      
      {...props}
    />
    {text}
  </div>
);
