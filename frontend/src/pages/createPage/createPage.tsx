import { Typography } from "@mui/material";
import { ReactElement, useState } from "react";
import { PageInfo } from "../../components/navbar/navBar";
import Template from "../../components/template/es_template/template";
import {
  emptyTemplate,
  esTemplate,
} from "../../components/template/es_template/templateType";

export const createPageInfo: PageInfo = {
  name: "create",
  route: "/create",
  element: <CreatePage />,
};

export default function CreatePage(): ReactElement {
  const [es_template, setEsTemplate] = useState<esTemplate>(emptyTemplate);

  return (
    <>
      <Typography>{"CREATE PAGE"}</Typography>
      <Template
        kind="create"
        es_template={es_template}
        setEsTemplate={setEsTemplate}
      />
    </>
  );
}
