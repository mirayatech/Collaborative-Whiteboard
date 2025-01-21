import React from "react";

type Props = {
  showGrid?: boolean;
  dotColor?: string;
  backgroundColor?: string;
};

const DotGrid: React.FC<Props> = ({
  showGrid = true,
  dotColor = "#E6E6E6",
  backgroundColor = "#FFFFFF",
}) => {
  const encodedColor = encodeURIComponent(dotColor).replace(/#/g, "%23");

  const gridStyle = {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    pointerEvents: "none" as const,
    zIndex: -1,
    backgroundColor,
    backgroundImage: showGrid
      ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='26' viewBox='0 0 26 26'%3E%3Ccircle fill='${encodedColor}' cx='3' cy='3' r='1.5'/%3E%3C/svg%3E")`
      : "none",
    backgroundRepeat: "repeat",
    backgroundAttachment: "fixed",
  };

  return <div style={gridStyle} aria-hidden="true" />;
};

export default DotGrid;
