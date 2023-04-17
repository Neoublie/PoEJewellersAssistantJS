import React, { useState } from "react";
import data from "../Data/amulets";
import Grid from "./Grid";
import PathOfExileAuth from "./PathOfExileAuth";

const StashTab = () => {
  const [stashType, setStashType] = useState(0);
  const [stashTab, setStashTab] = useState(data);
  const [stashTabItems, setStashTabItems] = useState(stashTab[0].items);

  // const createGrid = () => {
  //   const grid = [];
  //   for (let row = 0; row < 15; row++) {
  //     const currentRow = [];
  //     for (let col = 0; col < 15; col++) {
  //       currentRow.push(createNode(row, col));
  //     }
  //     grid.push(currentRow);
  //   }
  //   return grid;
  // };
  // const createNode = () => {};

  return (
    <div className="stash_tab">
      {/* {stashTabItems.map((stashItem) => {
        return (
          <div key={stashItem.id}>
            <img src={stashItem.icon} alt={stashItem.baseType} />
          </div>
        );
      })} */}
      {/* <Grid /> */}
      <PathOfExileAuth />
    </div>
  );
};

export default StashTab;
