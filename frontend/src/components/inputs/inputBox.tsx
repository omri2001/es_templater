import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function InputBox({
  label,
  value,
  setTextFunc,
}: {
  label: string;
  value: string | null;
  setTextFunc: (text: string) => void;
}) {
  const [text, setText] = useState<string>(value === null ? "" : value);

  useEffect(() => {
    setText(value === null ? "" : value);
  }, [value]);

  return (
    <TextField
      id={`${label}-input`}
      variant="outlined"
      value={text}
      label={label}
      onChange={(e) => {
        setText(e.target.value);
      }}
      onBlur={() => {
        setText(text);
        setTextFunc(text);
      }}
    />
  );
}
