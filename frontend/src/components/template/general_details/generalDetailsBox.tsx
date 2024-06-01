import { Box } from "@mui/material";
import { useState } from "react";
import { esTemplate, templates } from "../es_template/templateType";
import InputBox from "../inputBox";
import ProjectsInput from "./ProjectsInput";
import UniqueNameInput from "./uniqueNameInput";

export default function GeneralDetailsBox({
  kind,
  es_template,
  setEsTemplate,
}: {
  kind: "create" | "update";
  es_template: esTemplate;
  setEsTemplate: (text: esTemplate) => void;
}) {
  const [templateOptions, setTemplateOptions] =
    useState<esTemplate[]>(templates);

  const setUniqueName: (unique_name: string) => void = (unique_name) => {
    es_template.unique_name = unique_name;
    setEsTemplate(es_template);
  };
  const setDisplayName: (display_name: string) => void = (display_name) => {
    es_template.display_name = display_name;
    setEsTemplate(es_template);
  };
  const setProjectName: (project: esTemplate["project"]) => void = (
    project
  ) => {
    es_template.project = project;

    const options = templates.filter((template: esTemplate): boolean => {
      return template.project == project;
    });
    setUniqueName("");
    setEsTemplate(es_template);
    setTemplateOptions(options);
  };

  return (
    <>
      <h1>this is the engine template</h1>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
        <ProjectsInput
          es_template={es_template}
          setProjectName={setProjectName}
        />
        <UniqueNameInput
          kind={kind}
          es_template={es_template}
          setUniqueName={setUniqueName}
          options={templateOptions.map((template) => template.unique_name)}
        />
        <InputBox
          label="display name"
          value={es_template.display_name}
          setTextFunc={setDisplayName}
        />
      </Box>
    </>
  );
}
