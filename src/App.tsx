import React from "react";
import { useRoutes } from "react-router-dom";
import routesConfig from "routes/routes";
import { GlobalProvider } from "@/hooks/useGlobalContext";
import "antd/dist/antd.css";
import "./app.less";

const App = () => {
  const routes = useRoutes(routesConfig);
  return (
    <div className="app_container">
      <GlobalProvider>{routes}</GlobalProvider>
    </div>
  );
};

export default App;
