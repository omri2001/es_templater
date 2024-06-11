import { v4 as uuidv4 } from "uuid";
export type FieldTypeType = "int" | "text" | "bool" | "date" | "geometry";
export type SpecialTypeType = "link" | "array_string" | "";
export interface FieldType {
  key: string;
  unique_name: string;
  display_name: string;
  type: FieldTypeType;
  ontology: string;
  is_shown: boolean;
  special_type: SpecialTypeType;
}

export const getEmptyField = (): FieldType => {
  return {
    key: uuidv4(),
    unique_name: "",
    display_name: "",
    type: "text",
    ontology: "",
    is_shown: true,
    special_type: "",
  };
};
