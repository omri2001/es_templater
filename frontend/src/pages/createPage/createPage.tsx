import { ReactElement } from "react";
import { PageInfo } from "../../components/navbar/navBar";

export const createPageInfo: PageInfo = {
  name: "create",
  route: "/create",
  element: <CreatePage />,
};

export default function CreatePage(): ReactElement {
  return (
    <div>
      <h1>here you can create a tempalte from scratch</h1>
    </div>
  );
}
