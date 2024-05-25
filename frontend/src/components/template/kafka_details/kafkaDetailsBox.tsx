import { Box } from "@mui/material";
import { esTemplate, KafkaDetails } from "../es_template/templateType";
import InputBox from "../inputBox";

export default function KafkaDetailsBox({
  es_template,
  setEsTemplate,
}: {
  es_template: esTemplate;
  setEsTemplate: (text: esTemplate) => void;
}) {
  function handleInputChange(key: keyof KafkaDetails, value: string) {
    es_template.kafka[key] = value;
    setEsTemplate(es_template);
  }

  return (
    <>
      <h1>Kafka Credentials</h1>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
        {Object.entries(es_template.kafka).map(([key, value]) => (
          <InputBox
            label={key}
            key={`${key}-input`}
            value={value}
            setTextFunc={(text) => {
              handleInputChange(
                (key = key as keyof KafkaDetails),
                (value = text)
              );
            }}
          />
        ))}
      </Box>
    </>
  );
}
