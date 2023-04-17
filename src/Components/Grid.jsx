import React from "react";

const Grid = () => {
  // Generate the 16x16 grid cells
  const gridCells = Array.from({ length: 16 }, (_, rowIndex) =>
    Array.from({ length: 16 }, (_, colIndex) => (
      <div key={`cell-${rowIndex}-${colIndex}`} className="grid-cell"></div>
    ))
  );

  return <div className="grid">{gridCells}</div>;
};

export default Grid;
