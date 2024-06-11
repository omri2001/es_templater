import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function InputBox({
  label,
  ikey = null,
  value,
  setTextFunc,
}: {
  label: string;
  ikey: string | null;
  value: string | null;
  setTextFunc: (text: string) => void;
}) {
  const [text, setText] = useState<string>(value === null ? "" : value);

  useEffect(() => {
    setText(value === null ? "" : value);
  }, [value]);

  return (
    <TextField
      sx={{ width: "25ch" }}
      id={`${label}-input`}
      variant="outlined"
      value={text}
      label={label}
      key={ikey === null ? label : ikey}
      onChange={(e) => {
        setText(e.target.value);
      }}
      onBlur={(e) => {
        setTextFunc(text);
      }}
    />
  );
}
