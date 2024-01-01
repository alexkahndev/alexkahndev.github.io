import { useThree } from "react-three-fiber";
import { Line } from "@react-three/drei";
import { Vector3 } from "three";

const ParticlesModel = () => {
  const { size } = useThree();
  const resolution = 20;

  // Calculate the number of rows and columns based on the aspect ratio
  const numCells = Math.max(
    Math.floor(Math.min(size.width, size.height) / resolution),
    1
  );
  const cellSize = Math.min(size.width, size.height) / numCells;

  const rows = Math.floor(size.height / cellSize);
  const cols = Math.floor(size.width / cellSize);

  // Calculate adjusted cell sizes to fit the screen
  const adjustedCellWidth = size.width / cols;
  const adjustedCellHeight = size.height / rows;

  const rowStart = -(size.width / 2); //left
  const rowEnd = size.width / 2; //right
  const colStart = -(size.height / 2); //bottom
  const colEnd = size.height / 2; //top

  // Create an array to hold sphere positions
  const spherePositions = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = rowStart + col * adjustedCellWidth;
      const y = colStart + row * adjustedCellHeight;
      spherePositions.push([x, y, 0]); // Z position is set to 0
    }
  }

  return null;
};

export default ParticlesModel;
