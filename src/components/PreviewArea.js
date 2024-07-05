import React from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea({ cssTranformClick }) {
  return (
    <div
      className=""
      style={{
        transform: cssTranformClick,
        overflowX: "auto",
        width: "100%",
      }}
    >
      <CatSprite />
    </div>
  );
}
