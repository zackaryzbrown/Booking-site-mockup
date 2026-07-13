import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/pages/Home";
import { Services } from "./components/pages/Services";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { Book } from "./components/pages/Book";
import { NotFound } from "./components/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "book", Component: Book },
      { path: "*", Component: NotFound },
    ],
  },
]);
