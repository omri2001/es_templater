import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { esTemplate } from "../es_template/templateType";
import { projects } from "../projects/projectsType";

type projectsType = esTemplate["project"];

export default function ProjectsInput({
  value,
  setProjectName,
}: {
  value: projectsType;
  setProjectName: (text: projectsType) => void;
}) {
  const [project, setProject] = useState(value == "" ? null : value);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={[...projects] || null}
      sx={{ width: "25ch" }}
      blurOnSelect={true}
      value={project}
      onChange={(e, value) => {
        setProject(value);
        setProjectName(value === null ? "" : value);
      }}
      renderInput={(params) => <TextField {...params} label="project" />}
    />
  );
}
