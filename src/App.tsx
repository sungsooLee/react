import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "virtual:generated-pages-react";
import "./index.css";
import ReactLogo from "./assets/icons/react.svg";

function AppRoutes() {
  const element = useRoutes(routes);
  return (
    element ?? (
      <div className="intro_wrap">
        <img src={ReactLogo} alt="React Logo" className="logo" />
        <h1>Welcome to My React App</h1>
        <p>The current page is the index page</p>
      </div>
    )
  );
}

function App() {
  // 환경에 따라 basename 자동 전환
  const basename = import.meta.env.MODE === "production" ? "/react" : "/";

  return (
    <BrowserRouter basename={basename}>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
