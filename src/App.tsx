import { useRoutes } from "react-router-dom";
import routes from "virtual:generated-pages-react";
import "./index.css";

function App() {
  const element = useRoutes(routes);

  // 라우트가 비어 있으면 기본 화면 보여주기
  return (
    element ?? (
      <div className="intro_wrap">
        <img
          src="/src/assets/icons/react.svg"
          alt="React Logo"
          className="logo"
        />
        <h1>Welcome to My React App</h1>
        <p>The current page is the index page</p>
      </div>
    )
  );
}

export default App;
