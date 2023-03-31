import React from "react";
import ModuleTitle from "@/components/ModuleTitle";
import Switch from "./Switch";
import sun from "images/html/sun.png";
import moon from "images/html/moon.png";
import styles from "./index.module.scss";

const Switchs = () => {
  return (
    <div className={styles.container}>
      <ModuleTitle intlTitle="page.htmlVision.interactiveDesign.switchButton" />
      <Switch width={66} height={30} />
      <Switch
        width={76}
        height={34}
        openIcon={<span style={{ color: "#333", marginRight: "2px" }}>ON</span>}
        closeIcon={
          <span style={{ color: "#fff", marginLeft: "4px" }}>OFF</span>
        }
        style={{ margin: "0 60px" }}
      />
      <Switch
        openIcon={<img src={sun} alt="" width={26} height={26} />}
        closeIcon={<img src={moon} alt="" width={26} height={26} />}
      />
    </div>
  );
};

export default Switchs;
