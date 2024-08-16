import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function DisplayBox({
  label,
  value,
}: {
  label: string;
  value: string | null;
}) {
  const [text, setText] = useState<string>(value === null ? "" : value);

  useEffect(() => {
    setText(value === null ? "" : value);
  }, [value]);

  return (
    <TextField
      disabled
      id={`${label}-display`}
      variant="outlined"
      value={text}
      label={label}
    />
  );
}
