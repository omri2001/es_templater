import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function InputBox({
  label,
  value,
  setTextFunc,
}: {
  label: string;
  value: string;
  setTextFunc: (text: string) => void;
}) {
  const [text, setText] = useState<string>(value);
  useEffect(() => {
    setText(text);
  }, []); // Empty dependency array ensures this runs only on mount

  return (
    <TextField
      sx={{ width: "25ch" }}
      id={`${label}-input`}
      variant="outlined"
      value={text}
      label={label}
      onChange={(e) => {
        setText(e.target.value);
      }}
      onBlur={(e) => {
        setTextFunc(e.target.value);
      }}
    />
  );
}
