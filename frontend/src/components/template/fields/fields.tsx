import { Box, Button } from "@mui/material";
import { useState } from "react";
import Field from "./field";
import { FieldType, getEmptyField } from "./fieldType";

export default function Fields() {
  const [fields, setFields] = useState<FieldType[]>([]);

  const deleteField = (unique_key: string) => {
    const new_fields = fields.filter((field) => {
      return field.key != unique_key;
    });
    console.log(new_fields);
    setFields([...new_fields]);
  };

  return (
    <Box>
      <Button
        onClick={() => {
          setFields([...fields, getEmptyField()]);
        }}
      >
        Add Field
      </Button>
      {fields.map((field: FieldType, index) => (
        <Field field={field} key={index} onDelete={deleteField} />
      ))}
    </Box>
  );
}
