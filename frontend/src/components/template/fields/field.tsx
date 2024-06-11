import { Box, Button } from "@mui/material";
import InputBox from "../inputBox";
import { FieldType } from "./fieldType";

export default function Field({
  field,
  onDelete,
}: {
  field: FieldType;
  onDelete: (field: string) => void;
}) {
  return (
    <Box>
      <InputBox
        ikey={`${field.key}-unique_name`}
        label="unique_name"
        value={field.unique_name}
        setTextFunc={(text) => {
          field.unique_name = text;
        }}
      />
      <InputBox
        ikey={`${field.key}-display_name`}
        label="display_name"
        value={field.display_name}
        setTextFunc={() => {}}
      />
      <InputBox
        ikey={`${field.key}-type`}
        label="type"
        value={field.type}
        setTextFunc={() => {}}
      />
      <InputBox
        ikey={`${field.key}-ontology`}
        label="ontology"
        value={field.ontology}
        setTextFunc={() => {}}
      />
      <InputBox
        ikey={`${field.key}-is_shown`}
        label="is_shown"
        value={String(field.is_shown)}
        setTextFunc={() => {}}
      />
      <InputBox
        ikey={`${field.key}-special_type`}
        label="special_type"
        value={field.special_type}
        setTextFunc={() => {}}
      />
      <Button onClick={() => onDelete(field.key)}>Delete</Button>
    </Box>
  );
}
