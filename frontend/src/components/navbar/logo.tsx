import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type device = "computer" | "phone";

interface deviceSettings {
  variant: "h5" | "h6";
  sx: {
    [key: string]: string | number | { [key: string]: string };
  };
}

const phoneSettings: deviceSettings = {
  variant: "h6",
  sx: {
    mr: 2,
    display: { xs: "none", md: "flex" },
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none",
  },
};
const computerSettings: deviceSettings = {
  variant: "h5",
  sx: {
    mr: 2,
    display: { xs: "flex", md: "none" },
    flexGrow: 1,
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none",
  },
};

const AppLogo = ({
  device,
  default_route,
}: {
  device: device;
  default_route: string;
}) => {
  const navigate = useNavigate();

  let settings = phoneSettings;
  switch (device) {
    case "computer":
      settings = computerSettings;
      break;
    case "phone":
      settings = phoneSettings;
      break;
  }

  return (
    <Typography
      onClick={() => navigate(default_route)}
      variant={settings.variant}
      noWrap
      href={default_route}
      component="a"
      sx={settings.sx}
    >
      Templater
    </Typography>
  );
};
export default AppLogo;
