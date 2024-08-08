import { MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { FieldTypeType } from "./fields/fieldType";

export default function SelectBox({
  label,
  ikey = null,
  value,
  options,
  setValueFunc,
}: {
  label: string;
  ikey: string | null;
  value: FieldTypeType | null;
  options: FieldTypeType[];
  setValueFunc: (text: FieldTypeType) => void;
}) {
  const [text, setText] = useState<FieldTypeType>(
    value === null ? "text" : value
  );

  useEffect(() => {
    setText(value === null ? "text" : value);
  }, [value]);

  return (
    <Select
      sx={{ width: "25ch" }}
      id={`${label}-input`}
      value={text}
      key={ikey === null ? label : ikey}
      onChange={(e) => {
        setText(e.target.value as FieldTypeType);
      }}
      onBlur={() => {
        setValueFunc(text);
      }}
    >
      {options.map((key: FieldTypeType) => (
        <MenuItem key={key} value={key}>
          {key}
        </MenuItem>
      ))}
    </Select>
  );
}
