import { Checkbox, FormControlLabel } from "@mui/material";
import { useEffect, useState } from "react";

export default function CheckBox({
  label,
  value,
  setValueFunc,
}: {
  label: string;
  value: boolean | null;
  setValueFunc: (text: boolean) => void;
}) {
  const [bool, setBool] = useState<boolean>(value === null ? true : value);

  useEffect(() => {
    setBool(value === null ? true : value);
  }, [value]);

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={bool}
          onChange={(e) => {
            setBool(Boolean(e.target.checked));
          }}
          onBlur={() => {
            setValueFunc(bool);
          }}
        />
      }
      label={label}
      labelPlacement="top"
    />
  );
}
