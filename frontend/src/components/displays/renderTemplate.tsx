import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { esTemplate } from "../template/es_template/templateType";
import { FieldType } from "../template/fields/fieldType";

export function renderTemplate(template: esTemplate): JSX.Element[] {
  return [
    <Box key="preview">
      <Typography key="open_brackets">{"{"}</Typography>{" "}
      <Box key="general_details" sx={{ ml: 2 }}>
        <Typography key="project">{`project: ${template.project}`},</Typography>
        <Typography key="name">{`name: ${template.unique_name}`},</Typography>
        <Typography key="display_name">{`display_name: ${template.display_name}`}</Typography>
      </Box>
      <Box key="kafka_details" sx={{ ml: 2 }}>
        <Typography key="kafka_open">{"kafka_details: {"}</Typography>
        <Box key="kafka" sx={{ ml: 2 }}>
          <Typography key="kafka_brokers">{`brokers: ${template.kafka.brokers}`}</Typography>
          <Typography key="kafka_topic">{`topic: ${template.kafka.topic}`}</Typography>
          <Typography key="kafka_username">{`username: ${template.kafka.username}`}</Typography>
          <Typography key="kafka_password">{`password: ${template.kafka.password}`}</Typography>
        </Box>
        <Typography key="kafka_close">{"}"}</Typography>
      </Box>
      <Box key="classification_details" sx={{ ml: 2 }}>
        <Typography key="classification_open">{"classification: {"}</Typography>
        <Box key="classification" sx={{ ml: 2 }}>
          <Typography key="slice1">{`slice1: ${template.classification.slice1}`}</Typography>
          <Typography key="slice2">{`slice2: ${template.classification.slice2}`}</Typography>
          <Typography key="slice3">{`slice3: ${template.classification.slice3}`}</Typography>
          <Typography key="slice4">{`slice4: ${template.classification.slice4}`}</Typography>
        </Box>
        <Typography key="classification_close">{"}"}</Typography>
      </Box>
      <Box key="fields_display" sx={{ ml: 2 }}>
        <Typography key="fields_open">{"fields: ["}</Typography>
        <Box key="fields" sx={{ ml: 2 }}>
          {template.fields.map((field, index) => renderField(field, index))}
        </Box>
        <Typography key="fields_close">{"]"}</Typography>
      </Box>
      <Box key="metadata_all" sx={{ ml: 2 }}>
        <Typography key="metadata">{`metadata: ${template.metadata}`}</Typography>
      </Box>
      <Typography key="close_brackets">{"}"}</Typography>
    </Box>,
  ];
}

function renderField(field: FieldType, index: number): JSX.Element[] {
  return [
    <>
      <Box key={field.unique_name}>
        <Typography key={`${field.unique_name}_open`}>{"{"}</Typography>
        <Typography
          key={field.unique_name + "unique_name" + index}
        >{`unique_name: ${field.unique_name}`}</Typography>
        <Typography
          key={field.unique_name + "display_name" + index}
        >{`display_name: ${field.display_name}`}</Typography>
        <Typography
          key={field.unique_name + "type" + index}
        >{`type: ${field.type}`}</Typography>
        <Typography
          key={field.unique_name + "ontology" + index}
        >{`ontology: ${field.ontology}`}</Typography>
        <Typography
          key={field.unique_name + "is_shown" + index}
        >{`is_shown: ${field.is_shown}`}</Typography>
        <Typography key={`${field.unique_name}_close`}>{"},"}</Typography>
      </Box>
    </>,
  ];
}
