import React from "react";
import { cloneElement } from "react";
import { Controller } from "react-hook-form";

export default function FormItem({ control, label, children }) {
  return (
    <Controller
      control={control}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, onBlur, value } }) =>
        cloneElement(children, {
          onBlur: onBlur,
          onChangeText: onChange,
          value: value,
        })
      }
      name={label}
      defaultValue=""
    />
  );
}
