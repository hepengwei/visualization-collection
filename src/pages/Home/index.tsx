import React, { useEffect } from "react";
import { useRoutes, useLocation, useNavigate } from "react-router-dom";
import { contentRoutes as contentRoutesConfig } from "@/routes/routes";
import Header from "@/layout/Header";
import Menus from "@/layout/Menus";
import styles from "./index.module.less";

const Home = () => {
  const contentRoutes = useRoutes(contentRoutesConfig);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { pathname } = location;
    if (!pathname || pathname === "/") {
      navigate("/css/dynamicButtons");
    }
  }, [location]);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.container_body}>
        <Menus />
        <div className={styles.container_content}>{contentRoutes}</div>
      </div>
    </div>
  );
};

export default Home;
