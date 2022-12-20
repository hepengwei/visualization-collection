// @ts-nocheck
import React, { useEffect, useRef } from "react";
import { useRoutes, useLocation, useNavigate } from "react-router-dom";
import { contentRoutes as contentRoutesConfig } from "@/routes/routes";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import Header from "@/layout/Header";
import Menus from "@/layout/Menus";
import styles from "./index.module.scss";

const defaultPageUrl = "/html/visualDesign"; // 默认首页

const Home = () => {
  const { setScrollTop, setScrollContentRef } = useGlobalContext();
  const contentRoutes = useRoutes(contentRoutesConfig);
  const location = useLocation();
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);

  const onScroll = () => {
    setScrollTop(contentRef.current?.scrollTop);
  };

  useEffect(() => {
    const { pathname } = location;
    if (!pathname || pathname === "/") {
      navigate(defaultPageUrl);
    }
  }, [location]);

  useEffect(() => {
    setScrollContentRef(contentRef);
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.container_body}>
        <Menus />
        <div
          className={styles.container_content}
          onScroll={onScroll}
          ref={contentRef}
        >
          {contentRoutes}
        </div>
      </div>
    </div>
  );
};

export default Home;
