import { ReactElement } from "react";

import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PageInfo } from "../../components/navbar/navBar";
import { createPageInfo } from "../createPage/createPage";
import { updatePageInfo } from "../updatePage/updatePage";
import "./welcomePage.css";

export const homePageInfo: PageInfo = {
  name: "home",
  route: "/",
  element: (
    <WelcomePage createPage={createPageInfo} updatePage={updatePageInfo} />
  ),
};

export default function WelcomePage({
  createPage,
  updatePage,
}: {
  createPage: PageInfo;
  updatePage: PageInfo;
}): ReactElement {
  const navigate = useNavigate();

  return (
    <div className="welcomePage">
      <Typography variant="h2" padding={10}>
        Hello user
      </Typography>

      <Stack
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Button
          className="pageBtn"
          variant="contained"
          onClick={() => {
            navigate(createPage.route);
          }}
        >
          {createPage.name}
        </Button>
        <Button
          className="pageBtn"
          variant="contained"
          onClick={() => {
            navigate(updatePage.route);
          }}
        >
          {updatePage.name}
        </Button>
      </Stack>
    </div>
  );
}
