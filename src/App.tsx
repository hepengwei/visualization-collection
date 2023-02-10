import React from "react";
import { useRoutes } from "react-router-dom";
import routesConfig from "routes/routes";
import { IntlProvider } from "react-intl";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import zh_CN from "./locale/zh-CN";
import en_US from "./locale/en-US";
import "./app.scss";

const messages: {
  [key: string]: any;
} = {
  "zh-cn": zh_CN,
  "en-us": en_US,
};

const App = () => {
  const { locale } = useGlobalContext();
  const routes = useRoutes(routesConfig);
  return (
    <div className="app_container">
      <IntlProvider
        locale={locale || "en-us"}
        messages={messages[locale || "en-us"]}
      >
        {routes}
      </IntlProvider>
    </div>
  );
};

export default App;
