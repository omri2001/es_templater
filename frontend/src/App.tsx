import { ReactElement, useState } from "react";
import WelcomePage from "./components/welcomePage/welcomPage";

function display_page(page: string): ReactElement {
  let window = <></>;
  switch (page) {
    case "create":
      break;
    case "update":
      break;
    default:
      window = <WelcomePage />;
      break;
  }
  return window;
}

function App() {
  const [page, setPage] = useState("");

  return display_page(page);
}

export default App;
