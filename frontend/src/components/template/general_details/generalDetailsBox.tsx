import { Box } from "@mui/material";
import { useState } from "react";
import {
  emptyTemplate,
  esTemplate,
  templates,
} from "../es_template/templateType";
import DisplayNameInput from "./displayNameInput";
import ProjectsInput from "./ProjectsInput";
import UniqueNameInput from "./uniqueNameInput";

export default function GeneralDetailsBox({
  generate_new,
  es_template,
  setEsTemplate,
  showDisplayName = true,
}: {
  generate_new: boolean;
  es_template: esTemplate;
  setEsTemplate: (text: esTemplate) => void;
  showDisplayName?: boolean;
}) {
  const [templateOptions, setTemplateOptions] =
    useState<esTemplate[]>(templates);

  const setProjectName: (project: esTemplate["project"]) => void = (
    project
  ) => {
    es_template.project = project;
    const options = templates.filter((template: esTemplate): boolean => {
      return template.project == project;
    });
    setTemplateOptions(options);

    if (
      !options
        .map((option) => option.unique_name)
        .includes(es_template.unique_name)
    ) {
      es_template = emptyTemplate;
      es_template.project = project;
    }
    setEsTemplate(es_template);
  };

  return (
    <>
      <h1>Engine template</h1>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
        <ProjectsInput
          es_template={es_template}
          setProjectName={setProjectName}
        />
        <UniqueNameInput
          kind={generate_new ? "create" : "update"}
          es_template={es_template}
          setEsTemplate={setEsTemplate}
          templates={templateOptions}
        />

        {showDisplayName ? (
          <DisplayNameInput
            es_template={es_template}
            setEsTemplate={setEsTemplate}
          />
        ) : (
          <></>
        )}
      </Box>
    </>
  );
}
