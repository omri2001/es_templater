import MultiLineBox from "../../inputs/multilineBox";
import { esTemplate } from "../es_template/templateType";

export default function MetadataInput({
  es_template,
  setEsTemplate,
}: {
  es_template: esTemplate;
  setEsTemplate: (temmplate: esTemplate) => void;
}) {
  const setMetadata: (metadata: string) => void = (metadata) => {
    es_template.metadata = metadata;
    setEsTemplate(es_template);
  };
  return (
    <>
      <h1>Metadata</h1>
      <MultiLineBox
        label="metadata"
        value={es_template.metadata}
        setTextFunc={setMetadata}
      />
    </>
  );
}
