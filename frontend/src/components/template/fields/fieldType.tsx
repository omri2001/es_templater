import { v4 as uuidv4 } from "uuid";
export type RegularTypeType = "int" | "text" | "bool" | "date" | "geometry";
export type SpecialTypeType = "link" | "array_string";
export type FieldTypeType = RegularTypeType | SpecialTypeType;

export interface FieldType {
  key: string;
  unique_name: string;
  display_name: string;
  type: FieldTypeType;
  ontology: string;
  is_shown: boolean;
}

export const getEmptyField = (): FieldType => {
  return {
    key: uuidv4(),
    unique_name: "",
    display_name: "",
    type: "text",
    ontology: "",
    is_shown: true,
  };
};
