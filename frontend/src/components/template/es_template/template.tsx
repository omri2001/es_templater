import { Box } from "@mui/material";
import PreviewButton from "../../displays/previewButton";
import ClassificationDetailsBox from "../classification_details/classificationDetailsBox";
import Fields from "../fields/fields";
import GeneralDetailsBox from "../general_details/generalDetailsBox";
import KafkaDetailsBox from "../kafka_details/kafkaDetailsBox";
import MetadataInput from "../metadata/metadataInput";
import { esTemplate } from "./templateType";

export default function Template({
  generate_new,
  es_template,
  setEsTemplate,
}: {
  generate_new: boolean;
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
        generate_new={generate_new}
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
      <MetadataInput es_template={es_template} setEsTemplate={setEsTemplate} />
      <Fields es_template={es_template} setEsTemplate={setEsTemplate} />
      <PreviewButton es_template={es_template} />
    </Box>
  );
}
