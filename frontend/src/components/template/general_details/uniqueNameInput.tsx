import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { esTemplate, templates } from "../es_template/templateType";
import InputBox from "../inputBox";

export default function UniqueNameInput({
  kind,
  es_template,
  setUniqueName,
  options,
}: {
  kind: "create" | "update";
  es_template: esTemplate;
  setUniqueName: (text: string) => void;
  options: string[];
}) {
  const [engines, setEngines] = useState<string[]>([]);

  const get_engines = (project: string) => {
    return templates
      .filter((template) => template.project == project)
      .map((template) => template.unique_name);
  };

  return kind == "update" ? (
    <Autocomplete
      disablePortal
      id="unique-names-autocomplete"
      options={options}
      sx={{ width: "25ch" }}
      blurOnSelect={true}
      value={es_template.unique_name == "" ? null : es_template.unique_name}
      onChange={(e, value) => {
        setEngines(get_engines(es_template.project));
        setUniqueName(value === null ? "" : value);
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
