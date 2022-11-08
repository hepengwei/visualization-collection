import React from "react";

interface Page3Props {
  showPageIndex: number;
}

const Page3 = (props: Page3Props) => {
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
        Page3
      </span>
    </div>
  );
};

export default Page3;
