import { Autocomplete, TextField } from "@mui/material";
import { esTemplate } from "../es_template/templateType";
import InputBox from "../inputBox";

export default function UniqueNameInput({
  kind,
  es_template,
  setEsTemplate,
  templates,
}: {
  kind: "create" | "update";
  es_template: esTemplate;
  setEsTemplate: (text: esTemplate) => void;
  templates: esTemplate[];
}) {
  const setTemplate = (unique_name: string | null) => {
    const fixed_name = unique_name === null ? "" : unique_name;
    const chosen_template = templates.filter((template) => {
      return template.unique_name == fixed_name;
    });
    setEsTemplate(chosen_template[0]);
  };

  const setUniqueName = (unique_name: string) => {
    es_template.unique_name = unique_name;
    setEsTemplate(es_template);
  };

  return kind == "update" ? (
    <Autocomplete
      disablePortal
      id="unique-names-autocomplete"
      options={templates.map((template) => template.unique_name)}
      sx={{ width: "25ch" }}
      blurOnSelect={true}
      value={es_template.unique_name}
      onChange={(e, value) => {
        setTemplate(value);
      }}
      renderInput={(params) => <TextField {...params} label="unique name" />}
    />
  ) : (
    <InputBox
      label="unique name"
      value={es_template.unique_name}
      setTextFunc={setUniqueName}
    />
  );
}
