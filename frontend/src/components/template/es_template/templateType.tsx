import { Box, Typography } from "@mui/material";
import { Project } from "../projects/projectsType";

export interface KafkaDetails {
  brokers: string | null;
  username: string | null;
  password: string | null;
  topic: string | null;
}

export interface ClassificationDetails {
  slice1: string | null;
  slice2: string | null;
  slice3: string | null;
  slice4: string | null;
}

export interface esTemplate {
  project: Project | null;
  unique_name: string | null;
  display_name: string | null;
  kafka: KafkaDetails;
  classification: ClassificationDetails;
}

export const emptyTemplate: esTemplate = {
  project: null,
  unique_name: null,
  display_name: null,
  kafka: { brokers: null, username: null, password: null, topic: null },
  classification: { slice1: null, slice2: null, slice3: null, slice4: null },
};

export const wofATemplate: esTemplate = {
  unique_name: "wofA",
  display_name: "wofA",
  project: "wof",
  kafka: { brokers: "wofA", username: "wofA", password: "wofA", topic: "wofA" },
  classification: {
    slice1: "wofA",
    slice2: "wofA",
    slice3: "wofA",
    slice4: "wofA",
  },
};
export const wofBTemplate: esTemplate = {
  unique_name: "wofB",
  display_name: "wofB",
  project: "wof",
  kafka: { brokers: "wofB", username: "wofB", password: "wofB", topic: "wofB" },
  classification: {
    slice1: "wofB",
    slice2: "wofB",
    slice3: "wofB",
    slice4: "wofB",
  },
};
export const bomATemplate: esTemplate = {
  unique_name: "bomA",
  display_name: "bomA",
  project: "bom",
  kafka: { brokers: "bomA", username: "bomA", password: "bomA", topic: "bomA" },
  classification: {
    slice1: "bomA",
    slice2: "bomA",
    slice3: "bomA",
    slice4: "bomA",
  },
};

export const templates: esTemplate[] = [
  wofATemplate,
  wofBTemplate,
  bomATemplate,
];

export function renderObject(obj: any, parentKey = ""): JSX.Element[] {
  return [
    <Box key="openBrackets" sx={{ ml: 2 }}>
      <Typography>{"{"}</Typography>
      {Object.entries(obj).flatMap(([key, value], index) => {
        const displayKey = parentKey ? `${parentKey}.${key}` : key;
        if (typeof value === "object" && value !== null) {
          return [
            <Box key={displayKey} sx={{ ml: 2 }}>
              <Typography key={`${displayKey}-${index}`}>
                {`${key}: `}
              </Typography>
              {renderObject(value, displayKey)}
            </Box>,
          ];
        }
        return (
          <Typography key={`${displayKey}-${index}`} sx={{ ml: 2 }}>
            {`${key}: ${String(value)}`}
          </Typography>
        );
      })}
    </Box>,
    <Typography key="closeBrackets" sx={{ ml: 2 }}>
      {"}"}
    </Typography>,
  ];
}
