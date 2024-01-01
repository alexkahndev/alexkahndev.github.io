import React, { useEffect, useState, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

const RED = [1, 0, 0];
const ORANGE = [1, 0.5, 0];
const YELLOW = [1, 1, 0];
const GREEN = [0, 1, 0];
const BLUE = [0, 0, 1];
const PURPLE = [0.5, 0, 0.5];

const PALLETE = [RED, ORANGE, YELLOW, GREEN, BLUE, PURPLE];
const PARTICLES = 1000;
const MAX_POINTS = 100;

const Particle = () => {
  const { size } = useThree();

  const [posX, setPosX] = useState(Math.random() * size.width);
  const [posY, setPosY] = useState(Math.random() * size.height);
  const [speedX, setSpeedX] = useState(1);
  const [speedY, setSpeedY] = useState(1);
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(
    PALLETE[Math.floor(Math.random() * PALLETE.length)]
  );
  const [points, setPoints] = useState([new THREE.Vector3(posX, posY, 0)]);
  const [colors, setColors] = useState(color);

  console.log("initialized particle at: " + posX + ", " + posY);

  useFrame(() => {
    setPosX(posX + speedX);
    setPosY(posY + speedY);
    setCount(count + 1);
    //setColor(PALLETE[count % PALLETE.length]);

    setSpeedX(speedX + Math.random() * 0.2 - 0.1);
    setSpeedY(speedY + Math.random() * 0.2 - 0.1);

    if (points.length > MAX_POINTS) {
      points.shift();
      colors.shift();
    }
    setPoints([...points, new THREE.Vector3(posX, posY, 0)]);
    setColors([...colors, color]);
  });

  return (
    <Line points={points} color="white" vertexColors={colors} lineWidth={5} />
  );
};

const FlowFieldEffect = () => {
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

  // Create an array to store the flow vectors
  const flowField = [];
  const lines = [];

  //lines.push(<Particle key="0"/>);
  for (let i = 0; i < 50; i++) {
    lines.push(<Particle key={i} />);
  }
  return <mesh>{lines}</mesh>;
};

export default FlowFieldEffect;
