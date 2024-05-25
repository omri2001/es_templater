import { Box } from "@mui/material";
import { ClassificationDetails, esTemplate } from "../es_template/templateType";
import InputBox from "../inputBox";

export default function ClassificationDetailsBox({
  es_template,
  setEsTemplate,
}: {
  es_template: esTemplate;
  setEsTemplate: (text: esTemplate) => void;
}) {
  function handleInputChange(key: keyof ClassificationDetails, value: string) {
    es_template.classification[key] = value;
    setEsTemplate(es_template);
  }

  return (
    <>
      <h1>Classification</h1>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
        {Object.entries(es_template.classification).map(([key, value]) => (
          <InputBox
            label={key}
            key={`${key}-input`}
            defaultValue={value}
            setTextFunc={(text) => {
              handleInputChange(
                (key = key as keyof ClassificationDetails),
                (value = text)
              );
            }}
          />
        ))}
      </Box>
    </>
  );
}
