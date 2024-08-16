import { Box, Button } from "@mui/material";
import { ReactElement, useEffect, useState } from "react";
import { PageInfo } from "../../components/navbar/navBar";
import {
  emptyTemplate,
  esTemplate,
} from "../../components/template/es_template/templateType";
import GeneralDetailsBox from "../../components/template/general_details/generalDetailsBox";

export const transformPageInfo: PageInfo = {
  name: "transform",
  route: "/transform",
  element: <TransformPage />,
};
export default function TransformPage(): ReactElement {
  const [es_template, setEsTemplate] = useState<esTemplate>(emptyTemplate);

  function setEsTemplateCopy(es_template: esTemplate): void {
    setEsTemplate({ ...es_template });
  }
  useEffect(() => {
    setEsTemplateCopy(emptyTemplate);
  }, []); // Empty dependency array ensures this runs only on mount

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "50px",
        "& > :not(style)": { m: 1 },
      }}
      key="templateForm"
      autoComplete="off"
    >
      <GeneralDetailsBox
        generate_new={false}
        es_template={es_template}
        setEsTemplate={setEsTemplate}
        showDisplayName={false}
      />

      <Button
        sx={{
          padding: "200px",
          backgroundColor: "red",
          borderRadius: "50%",
          border: "0",
          ":hover": { backgroundColor: "#4F0101" },
        }}
        variant="contained"
      >
        <h1>Activate</h1>
      </Button>
    </Box>
  );
}
