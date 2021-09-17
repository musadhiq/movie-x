import React from "react";
import { Skeleton } from "@mui/material";

function Loading({ width, height }) {
  return (
    <div
      style={{
        margin: "0 auto",
      }}
    >
      <Skeleton variant="text" height="50px" />
      <Skeleton
        variant="rectangular"
        width={width}
        height={height}
        animation="wave"
      />
      <Skeleton variant="text" height="50px" />
    </div>
  );
}

export default Loading;
