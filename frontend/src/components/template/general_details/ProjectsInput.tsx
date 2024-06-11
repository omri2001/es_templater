import { Autocomplete, TextField } from "@mui/material";
import { esTemplate } from "../es_template/templateType";
import { projects } from "../projects/projectsType";

type projectsType = esTemplate["project"];

export default function ProjectsInput({
  setProjectName,
  es_template,
}: {
  es_template: esTemplate;
  setProjectName: (text: projectsType) => void;
}) {
  return (
    <Autocomplete
      disablePortal
      id="projects-autocomplete"
      options={[...projects] || null}
      sx={{ width: "25ch" }}
      blurOnSelect={false}
      value={es_template.project == "" ? null : es_template.project}
      onChange={(e, value) => {
        setProjectName(value === null ? "" : value);
      }}
      renderInput={(params) => <TextField {...params} label="project" />}
    />
  );
}
