import { Icon } from "@mui/material";
import React, { useState } from "react";

export default function ProductColors({ colors }) {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <p>
      Color:
      {colors.map((color, index) => {
        return (
          <button
            key={index}
            style={{ backgroundColor: color }}
            className="buttonStyle"
            onClick={() => {
              setSelectedColor(color);
            }}
          >
            <Icon color="info">{color === selectedColor ? "check" : null}</Icon>
          </button>
        );
      })}
    </p>
  );
}
