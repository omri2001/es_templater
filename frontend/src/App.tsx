import { BrowserRouter, Route, Routes } from "react-router-dom";

import MyCostumeThemeProvider from "./assets/costumeThemeProvider";
import ResponsiveNavBar, { PageInfo } from "./components/navbar/navBar";
import { createPageInfo } from "./pages/createPage/createPage";
import { updatePageInfo } from "./pages/updatePage/updatePage";
import { homePageInfo } from "./pages/welcomePage/welcomPage";

function App() {
  const pages: PageInfo[] = [homePageInfo, createPageInfo, updatePageInfo];

  return (
    <MyCostumeThemeProvider>
      <BrowserRouter>
        <div>
          <ResponsiveNavBar pages={pages} />
          <Routes>
            {pages.map((pageInfo) => (
              <Route
                key={pageInfo.name}
                path={pageInfo.route}
                element={pageInfo.element}
              />
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </MyCostumeThemeProvider>
  );
}

export default App;
