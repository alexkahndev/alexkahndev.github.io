import React , {useEffect, useState, useRef} from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

const red = [1, 0, 0];
const orange = [1, 0.5, 0];
const yellow = [1, 1, 0];
const green = [0, 1, 0];
const blue = [0, 0, 1];
const purple = [0.5, 0, 0.5];

const pallete = [red, orange, yellow, green, blue, purple];
const MAX_POINTS = 5;
let count = 0;


const Particle = () => {
    const { size } = useThree();

    let posX = Math.random() * size.width;
    let posY = Math.random() * size.height;
    let speedX = 1;
    let speedY = 1;

    let color = pallete[count % pallete.length];

    const [points, setPoints] = useState([new THREE.Vector3(posX, posY, 0)]);
    const [colors,setColors] = useState(color);

    useFrame(() => {
       
        posX += speedX;
        posY += speedY;
        count += 1;

        if (posX < 0 || posX > size.width) {
            speedX = -speedX;
        }

        if (posY < 0 || posY > size.height) {
            speedY = -speedY;
        }

        if(points.length > MAX_POINTS) {
            points.shift();
            colors.shift();
        }
        setPoints([...points, new THREE.Vector3(posX, posY, 0)]);
        setColors([...colors, color]);

    });

    return (
        <Line 
            points={points} 
            color="white"
            vertexColors={colors}
            lineWidth={size.width / size.height}
        />
    );
};


const FlowFieldEffect = () => {
    const { size } = useThree();
    const resolution = 20;

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

    // Create an array to store the flow vectors
    const flowField = [];
    const lines = [];

    lines.push(<Particle/>);
    return <mesh>{lines}</mesh>;
};

export default FlowFieldEffect;
