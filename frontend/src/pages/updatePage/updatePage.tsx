import { ReactElement } from "react";
import { PageInfo } from "../../components/navbar/navBar";
export const updatePageInfo: PageInfo = {
  name: "update",
  route: "/update",
  element: <UpdatePage />,
};
export default function UpdatePage(): ReactElement {
  return (
    <div>
      <h1>here you can update a tempalte from scratch</h1>
    </div>
  );
}
