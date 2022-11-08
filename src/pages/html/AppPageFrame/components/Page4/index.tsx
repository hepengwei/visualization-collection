import React from "react";

interface Page4Props {
  showPageIndex: number;
}

const Page4 = (props: Page4Props) => {
  const { showPageIndex } = props;
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span style={{ fontSize: "50px", fontWeight: 500 }}>
        Page4
      </span>
    </div>
  );
};

export default Page4;
