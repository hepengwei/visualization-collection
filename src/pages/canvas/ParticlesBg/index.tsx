// @ts-nocheck
/**
 * 动态粒子背景
 */
import React, { useEffect } from "react";
import "particles.js";
import particlesParams from "./particlesParams";

const ParticlesBg = (props) => {
  useEffect(() => {
    particlesJS("particles-js", particlesParams);
  }, []);

  return (
    <div
      style={{
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor: "#000000",
      }}
      id="particles-js"
    >
      {props.children}
    </div>
  );
};

export default ParticlesBg;
