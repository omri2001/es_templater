import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

import "./welcomePage.css";

export default function WelcomePage() {
  return (
    <>
      <div className="welcomePage">
        <h1>Hello user</h1>

        <Stack
          spacing={2}
          divider={<Divider orientation="vertical" flexItem />}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Button className="pageBtn" variant="contained">
            Create
          </Button>
          <Button className="pageBtn" variant="contained">
            Update
          </Button>
        </Stack>
      </div>
    </>
  );
}
