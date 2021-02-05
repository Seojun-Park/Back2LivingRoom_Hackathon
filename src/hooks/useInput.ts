import React, { ReactEventHandler, useState } from "react";

const useInput = (
  defaultValue: string
): [
  string,
  (event: React.ChangeEvent) => any,
  React.Dispatch<React.SetStateAction<string>>
] => {
  const [value, setValue] = useState<string>(defaultValue);

  const onChange: ReactEventHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };
  return [value, onChange, setValue];
};

export default useInput;
