import { useThree } from "react-three-fiber";
import { Line } from "@react-three/drei";
import { Vector3 } from "three";
import React from "react";

const GridModel = () => {
  const { size } = useThree();
  const resolution = 10;

  // Calculate the number of rows and columns based on the aspect ratio
  const numCells = Math.max(Math.floor(Math.min(size.width, size.height) / resolution), 1);
  const cellSize = Math.min(size.width, size.height) / numCells;

  const rows = Math.floor(size.height / cellSize);
  const cols = Math.floor(size.width / cellSize);

  // Calculate adjusted cell sizes to fit the screen
  const adjustedCellWidth = size.width / cols;
  const adjustedCellHeight = size.height / rows;

  const rowStart = -(size.width / 2); //left
  const rowEnd = (size.width / 2); //right
  const colStart = -(size.height / 2); //bottom
  const colEnd = size.height / 2; //top

  const grid = [];

  for (let i = 0; i < rows; i++) {
    let startPoint = new Vector3(rowStart, i * adjustedCellHeight + colStart, 0);
    let endPoint = new Vector3(rowEnd, i * adjustedCellHeight + colStart, 0);

    grid.push(<Line key={`row-${i}`} points={[startPoint, endPoint]} color="black" />);
  }

  for (let i = 0; i < cols; i++) {
    let startPoint = new Vector3(i * adjustedCellWidth + rowStart, colStart, 0);
    let endPoint = new Vector3(i * adjustedCellWidth + rowStart, colEnd, 0);

    grid.push(<Line key={`col-${i}`} points={[startPoint, endPoint]} color="black" />);
  }

  return <mesh>{grid}</mesh>;
};

export default GridModel;
