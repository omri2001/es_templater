import { Typography } from "@mui/material";
import { ReactElement, useState } from "react";
import { PageInfo } from "../../components/navbar/navBar";
import Template from "../../components/template/es_template/template";
import {
  emptyTemplate,
  esTemplate,
} from "../../components/template/es_template/templateType";
export const updatePageInfo: PageInfo = {
  name: "update",
  route: "/update",
  element: <UpdatePage />,
};
export default function UpdatePage(): ReactElement {
  const [es_template, setEsTemplate] = useState<esTemplate>(emptyTemplate);

  return (
    <div>
      <Typography>{"UPDATE PAGE"}</Typography>

      <Template
        kind="update"
        es_template={es_template}
        setEsTemplate={setEsTemplate}
      />
    </div>
  );
}
