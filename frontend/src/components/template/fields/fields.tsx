import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import {
  DragDropContext,
  Droppable,
  DroppableProvided,
} from "react-beautiful-dnd";

import { Bounce, toast, ToastContainer } from "react-toastify";
import { esTemplate } from "../es_template/templateType";
import Field from "./field";
import { FieldType, getEmptyField } from "./fieldType";

const reorder = (list: FieldType[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export default function Fields({
  es_template,
  setEsTemplate,
}: {
  es_template: esTemplate;
  setEsTemplate: (text: esTemplate) => void;
}) {
  const [fields, setFields] = useState<FieldType[]>(es_template.fields);

  // this might not be the best way to do so, this is used when laoding a fields already so itll load them like in the inputBox
  //-------------------------------------------------
  useEffect(() => {
    setFields(es_template.fields === null ? [] : es_template.fields);
  }, [es_template.fields]);
  //-------------------------------------------------

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    const reorderedFields = reorder(
      fields,
      result.source.index,
      result.destination.index
    );
    updateFields(reorderedFields);
  };

  const updateFields = (newFields: FieldType[]) => {
    setFields(newFields);

    setEsTemplate({
      ...es_template,
      fields: [...newFields],
    });
  };

  const updateField = (newField: FieldType) => {
    const updatedFields = fields.map((f) =>
      f.key === newField.key ? newField : f
    );
    updateFields(updatedFields);
  };

  const updateUniqueNameField = (newField: FieldType) => {
    console.log(newField.unique_name);
    const is_exists =
      newField.unique_name !== ""
        ? fields
            .map((field) => field.unique_name)
            .filter((name) => name == newField.unique_name).length >= 1
        : false;
    if (is_exists) {
      toast.error(`duplicate unique name found: ${newField.unique_name}`, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
    updateField(newField);
    return is_exists;
  };

  return (
    <Box display="flex" flexDirection="column" gap={2} alignItems="center">
      <Button
        onClick={() => {
          updateFields([...fields, getEmptyField()]);
        }}
      >
        Add Field
      </Button>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided: DroppableProvided) => (
            <Box
              sx={{ display: "flex", flexDirection: "column" }}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {fields.map((field: FieldType, index) => (
                <Field
                  field={field}
                  index={index}
                  key={index}
                  onDelete={(unique_key: string) => {
                    const new_fields = fields.filter(
                      (field) => field.key !== unique_key
                    );

                    updateFields(new_fields);
                  }}
                  onUpdateField={updateField}
                  onUniqueNameUpdate={updateUniqueNameField}
                />
              ))}
              {provided.placeholder}
              <ToastContainer />
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
}
