// @ts-nocheck
import React, { useEffect, useRef } from "react";
import { useRoutes, useLocation, useNavigate } from "react-router-dom";
import { contentRoutes as contentRoutesConfig } from "@/routes/routes";
import { GlobalProvider } from "@/globalContext";
import Header from "@/layout/Header";
import Menus from "@/layout/Menus";
import styles from "./index.module.less";

const defaultPageUrl = "/html/visualDesign"; // 默认首页

const Home = () => {
  const contentRoutes = useRoutes(contentRoutesConfig);
  const location = useLocation();
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);

  const onScroll = () => {
    // 将当前垂直滚动条位置保存到全局
    window.scrollTop = contentRef.current?.scrollTop || 0;
  };

  useEffect(() => {
    window.scrollTop = 0;
    const { pathname } = location;
    if (!pathname || pathname === "/") {
      navigate(defaultPageUrl);
    }
  }, [location]);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.container_body}>
        <GlobalProvider>
          <Menus />
          <div
            className={styles.container_content}
            onScroll={onScroll}
            ref={contentRef}
          >
            {contentRoutes}
          </div>
        </GlobalProvider>
      </div>
    </div>
  );
};

export default Home;
