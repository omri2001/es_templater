import { createContext } from "react";

interface pageContext {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

export const PageContext = createContext<pageContext>({
  page: "",
  setPage: () => {},
});
