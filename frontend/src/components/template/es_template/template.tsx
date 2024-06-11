import { Box } from "@mui/material";
import ClassificationDetailsBox from "../classification_details/classificationDetailsBox";
import GeneralDetailsBox from "../general_details/generalDetailsBox";
import KafkaDetailsBox from "../kafka_details/kafkaDetailsBox";
import PreviewButton from "../preview/previewButton";
import { esTemplate } from "./templateType";
import Fields from "../fields/fields";

export default function Template({
  kind,
  es_template,
  setEsTemplate,
}: {
  kind: "update" | "create";
  es_template: esTemplate;
  setEsTemplate: (text: esTemplate) => void;
}) {
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
        kind={kind}
        es_template={es_template}
        setEsTemplate={setEsTemplate}
      />

      <KafkaDetailsBox
        es_template={es_template}
        setEsTemplate={setEsTemplate}
      />

      <ClassificationDetailsBox
        es_template={es_template}
        setEsTemplate={setEsTemplate}
      />
      <Fields />
      <PreviewButton es_template={es_template} />
    </Box>
  );
}
