import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "virtual:generated-pages-react";
import "./index.css";
import ReactLogo from "./assets/icons/react.svg";

function AppRoutes() {
  const element = useRoutes(routes);

  return (
    element ?? (
      <div className="intro_wrap">
        <img
          src={ReactLogo}
          alt="React Logo"
          className="logo"
        />
        <h1>Welcome to My React App</h1>
        <p>The current page is the index page</p>
      </div>
    )
  );
}

export default function App() {
  // GitHub Pages용 basename 설정
  return (
    <BrowserRouter basename="/react">
      <AppRoutes />
    </BrowserRouter>
  );
}
