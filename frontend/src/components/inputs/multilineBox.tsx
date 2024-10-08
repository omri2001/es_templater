import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function MultiLineBox({
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
      sx={{ width: "500px" }}
      id={`${label}-multiline-input`}
      variant="outlined"
      value={text}
      label={label}
      onChange={(e) => {
        setText(e.target.value);
      }}
      onBlur={() => {
        setTextFunc(text);
      }}
      multiline
      rows={8}
    />
  );
}
