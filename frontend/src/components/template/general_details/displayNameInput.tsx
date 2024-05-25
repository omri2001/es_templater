import { TextField } from "@mui/material";

export default function DisplayNameInput({
  setDisplayName,
}: {
  setDisplayName: (text: string) => void;
}) {
  return (
    <TextField
      sx={{ width: "25ch" }}
      id="display_name-basic"
      variant="outlined"
      label="display name"
      onBlur={(e) => {
        setDisplayName(e.target.value);
      }}
    />
  );
}
