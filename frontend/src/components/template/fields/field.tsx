import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton } from "@mui/material";
import InputBox from "../../inputs/inputBox";
import "./field.css"; // Import the CSS file

import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import React from "react";
import { Draggable, DraggableProvided } from "react-beautiful-dnd";
import CheckBox from "../../inputs/checkBox";
import SelectBox from "../../inputs/selectBox";
import { FieldType } from "./fieldType";

const Field = React.memo(
  ({
    index,
    field,
    onDelete,
    onUpdateField,
    onUniqueNameUpdate,
  }: {
    index: number;
    field: FieldType;
    onDelete: (field: string) => void;
    onUpdateField: (field: FieldType) => void;
    onUniqueNameUpdate: (field: FieldType) => void;
  }) => {
    return (
      <Draggable draggableId={field.key} key={field.key} index={index}>
        {(provided: DraggableProvided) => (
          <Box
            sx={{
              border: "1px solid gray", // Border color and style
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Shadow to create the shading effect
              borderRadius: "4px", // Optional: for rounded corners
            }}
            display="flex"
            flexDirection="row"
            gap={2}
            alignItems="center"
            key={field.key}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="dnd-margin"
          >
            <IconButton
              {...provided.dragHandleProps}
              sx={{ marginRight: "8px" }}
            >
              <DragIndicatorIcon />
            </IconButton>

            <InputBox
              label="unique_name"
              value={field.unique_name}
              setTextFunc={(text) =>
                onUniqueNameUpdate({ ...field, unique_name: text })
              }
            />
            <InputBox
              label="display_name"
              value={field.display_name}
              setTextFunc={(text) =>
                onUpdateField({ ...field, display_name: text })
              }
            />
            <SelectBox
              ikey={`${field.key}-type`}
              label="type"
              value={field.type}
              options={[
                "int",
                "text",
                "bool",
                "date",
                "geometry",
                "link",
                "array_string",
              ]}
              setValueFunc={(text) => onUpdateField({ ...field, type: text })}
            />
            <InputBox
              label="ontology"
              value={field.ontology}
              setTextFunc={(text) =>
                onUpdateField({ ...field, ontology: text })
              }
            />
            <CheckBox
              label="is_shown"
              value={field.is_shown}
              setValueFunc={(text) =>
                onUpdateField({ ...field, is_shown: text })
              }
            />
            <IconButton
              className="delete-btn"
              onClick={() => onDelete(field.key)}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        )}
      </Draggable>
    );
  }
);

export default Field;
