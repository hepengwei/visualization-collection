import React from "react";

interface Page1Props {
  showPageIndex: number;
}

const Page1 = (props: Page1Props) => {
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
        Page1
      </span>
    </div>
  );
};

export default Page1;
