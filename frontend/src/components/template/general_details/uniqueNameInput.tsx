import { Autocomplete, TextField } from "@mui/material";
import { esTemplate, templates } from "../es_template/templateType";
import InputBox from "../inputBox";

export default function UniqueNameInput({
  kind,
  es_template,
  setUniqueName,
}: {
  kind: "create" | "update";
  es_template: esTemplate;
  setUniqueName: (text: string) => void;
}) {
  const get_engines = () => {
    return templates
      .filter((template) => template.project == es_template.project)
      .map((template) => template.unique_name);
  };

  return kind == "update" ? (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={[...get_engines()] || null}
      sx={{ width: "25ch" }}
      blurOnSelect={true}
      value={es_template.unique_name}
      onChange={(e, value) => {
        setUniqueName(value === null ? "" : value);
      }}
      renderInput={(params) => <TextField {...params} label="unique_name" />}
    />
  ) : (
    <InputBox
      label="unique name"
      value={es_template.unique_name}
      setTextFunc={setUniqueName}
    />
  );
}
