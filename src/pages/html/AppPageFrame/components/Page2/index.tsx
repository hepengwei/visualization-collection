import React from "react";

interface Page2Props {
  showPageIndex: number;
}

const Page2 = (props: Page2Props) => {
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
        Page2
      </span>
    </div>
  );
};

export default Page2;
