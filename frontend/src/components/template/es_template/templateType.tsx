import { Box, Typography } from "@mui/material";
import { Project } from "../projects/projectsType";

export interface KafkaDetails {
  brokers: string;
  username: string;
  password: string;
  topic: string;
}

export interface ClassificationDetails {
  slice1: string;
  slice2: string;
  slice3: string;
  slice4: string;
}

export interface esTemplate {
  project: Project | "";
  unique_name: string;
  display_name: string;
  kafka: KafkaDetails;
  classification: ClassificationDetails;
}

export const emptyTemplate: esTemplate = {
  project: "",
  unique_name: "",
  display_name: "",
  kafka: { brokers: "", username: "", password: "", topic: "" },
  classification: { slice1: "", slice2: "", slice3: "", slice4: "" },
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
