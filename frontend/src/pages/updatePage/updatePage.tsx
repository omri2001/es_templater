import { Typography } from "@mui/material";
import { ReactElement, useEffect, useState } from "react";
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

  function setEsTemplateCopy(es_template: esTemplate): void {
    setEsTemplate({ ...es_template });
  }
  useEffect(() => {
    setEsTemplateCopy(emptyTemplate);
  }, []); // Empty dependency array ensures this runs only on mount

  return (
    <div>
      <Template
        kind="update"
        es_template={es_template}
        setEsTemplate={setEsTemplateCopy}
      />
    </div>
  );
}
