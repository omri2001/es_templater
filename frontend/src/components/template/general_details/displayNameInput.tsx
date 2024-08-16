import InputBox from "../../inputs/inputBox";
import { esTemplate } from "../es_template/templateType";

export default function DisplayNameInput({
  es_template,
  setEsTemplate,
}: {
  es_template: esTemplate;
  setEsTemplate: (temmplate: esTemplate) => void;
}) {
  const setDisplayName: (display_name: string) => void = (display_name) => {
    es_template.display_name = display_name;
    setEsTemplate(es_template);
  };
  return (
    <InputBox
      label="display name"
      value={es_template.display_name}
      setTextFunc={setDisplayName}
    />
  );
}
