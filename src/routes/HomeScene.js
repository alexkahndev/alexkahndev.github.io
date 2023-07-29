import React, { useRef, useEffect } from 'react';
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import * as THREE from 'three';

let renderer, scene, fixedCamera, glbLoader, animationFrameId;
let mouse = new THREE.Vector2();
let elapsedTime = 0;
let pickableObjects = [];
const raycaster = new THREE.Raycaster();
//const glbLoader = new GLTFLoader();

// Initialize

function init(sceneContainer) {
  // renderer
  renderer = new THREE.WebGLRenderer();
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; //
  renderer.setSize(window.innerWidth, window.innerHeight);
  sceneContainer.appendChild(renderer.domElement);

  // gltf loader
  glbLoader = new GLTFLoader();

  // scene
  scene = new THREE.Scene();

  // skybox
  getBackground();

  // camera
  fixedCamera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
  fixedCamera.position.set(500, 500, 500);
  fixedCamera.lookAt(0, 100, 0);

  // lights
  const light = new THREE.PointLight(0xffffff, 0.9, 0, 100000);
  light.position.set(0, 50, 120);
  light.castShadow = true;
  light.shadow.mapSize.width = 512; // default
  light.shadow.mapSize.height = 512; // default
  light.shadow.camera.near = 0.5; // default
  light.shadow.camera.far = 5000; // default

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.castShadow = true;
  directionalLight.position.set(-5, 20, 4);
  directionalLight.target.position.set(9, 0, -9);
  directionalLight.shadow.camera.left *= 9;
  directionalLight.shadow.camera.right *= 9;
  directionalLight.shadow.camera.top *= 9;
  directionalLight.shadow.camera.bottom *= 9;

  scene.add(light);
  scene.add(directionalLight);

  // event listeners
  window.addEventListener("resize", onWindowResize);
  window.addEventListener("mousedown", mouseDown, false);
  window.addEventListener("mousemove", mouseMove, false);
  window.addEventListener("keydown", onDocumentKeyDown, false);
  window.addEventListener("keyup", onDocumentKeyUp, false);
}

// Event Listeners

function onWindowResize() {
  fixedCamera.aspect = window.innerWidth / window.innerHeight;
  fixedCamera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function mouseMove(event) {
  event.preventDefault();
}

function mouseDown(event) {
  console.log("Mouse down event triggered!");
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, fixedCamera);

  let intersects = raycaster.intersectObjects(pickableObjects, false);
  if (intersects.length > 0) {
    let object = intersects[0].object;
    console.log("Clicked object:", object.name);
    if (object.name == 'museum') {
      // go to projects page
      console.log('go to projects page');
      window.location.href = '/projects';
    }
  }
}

function onDocumentKeyDown(event) {
  const keyCode = event.which;
}

function onDocumentKeyUp(event) {
  const keyCode = event.which;
}

// Animation

function animate() {

  animationFrameId = requestAnimationFrame(animate); // Call animate again to update the scene with the next frame

  // update the planes position
  let plane = scene.getObjectByName('plane');

  // Increment the elapsed time
  elapsedTime += 0.005;

  // Calculate the circular path
  const radius = 200; // Set the radius of the circular path
  const angle = elapsedTime; // The angle changes over time to make the plane move around the circle
  const x = radius * Math.cos(angle);
  const z = radius * Math.sin(angle);

  // Update the plane's position along the circular path
  if (plane) {
    plane.position.x = x;
    //plane.position.y = 200; // Maintain a constant height above the ground
    plane.position.z = z;

    // Calculate the angle for the plane's rotation
    const dist = Math.sqrt(z * z + x * x);
    let planeAngle = Math.atan2(z, x);
    planeAngle += 0.005;

    // Set the YXZ rotation order to ensure the plane's propeller is facing forward
    plane.rotation.order = 'YXZ';
    plane.rotation.y = Math.PI - planeAngle; // Rotate the plane to face the direction of movement

    render();
  }
}

function render() {
  renderer.render(scene, fixedCamera);
}

// Props
function getProps() {
  // load ground object

  glbLoader.load('./resources/props/ground.glb', function (gltf) {
    const model = gltf.scene;

    // Center the model's pivot point at the origin (0, 0, 0)
    model.position.set(0, 0, 0);

    // Calculate the bounding box of the model to get its size
    const bbox = new THREE.Box3().setFromObject(model);
    const modelSize = new THREE.Vector3();
    bbox.getSize(modelSize);

    // Calculate the scale factor to make the model have a desired size (e.g., 20 units in this case)
    const desiredSize = 1000;
    const scaleFactor = desiredSize / Math.max(modelSize.x, modelSize.y, modelSize.z);

    // Apply the scale factor to the model
    model.scale.set(scaleFactor, scaleFactor, scaleFactor);

    // Set shadow properties for all child meshes
    model.traverse(function (child) {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });

    // Add the scaled model to the scene
    scene.add(model);
});

// load plane object
glbLoader.load('./resources/props/plane.glb', function(gltf) {
    const model = gltf.scene;

    // Calculate the bounding box of the model to get its size
    const bbox = new THREE.Box3().setFromObject(model);
    const modelSize = new THREE.Vector3();
    bbox.getSize(modelSize);

    // Calculate the scale factor to make the model have a desired size (e.g., 20 units in this case)
    const desiredSize = 20; // Adjust this value to control the size of the plane
    const scaleFactor = desiredSize / Math.max(modelSize.x, modelSize.y, modelSize.z);

    // Apply the scale factor to the model
    model.scale.set(scaleFactor, scaleFactor, scaleFactor);

    // Set shadow properties for all child meshes
    model.traverse(function(child) {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });

    // Position the plane at the desired height above the ground
    model.position.set(0, 200, 0);

    // Set a name to the plane for later reference
    model.name = "plane";

    // Add the scaled model to the scene
    scene.add(model);
});

// load museum object
glbLoader.load('./resources/props/museum.glb', function(gltf) {
    const model = gltf.scene;

    // Calculate the bounding box of the model to get its size
    const bbox = new THREE.Box3().setFromObject(model);
    const modelSize = new THREE.Vector3();
    bbox.getSize(modelSize);

    // Calculate the scale factor to make the model have a desired size (e.g., 20 units in this case)
    const desiredSize = 200; // Adjust this value to control the size of the plane
    const scaleFactor = desiredSize / Math.max(modelSize.x, modelSize.y, modelSize.z);

    // Apply the scale factor to the model
    model.scale.set(scaleFactor, scaleFactor, scaleFactor);

    // Set shadow properties for all child meshes
    model.traverse(function(child) {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });

    // Position the museum at the desired height above the ground
    model.position.set(80, 80, -120);
    model.rotation.y = Math.PI * 2 + 0.5;

    // Set a name to the museum for later reference
    model.name = "museum";
    
    // Add the scaled model to the scene
    scene.add(model);
});

// load boat object
glbLoader.load('./resources/props/boat.glb', function(gltf) {
    const model = gltf.scene;

    // Calculate the bounding box of the model to get its size
    const bbox = new THREE.Box3().setFromObject(model);
    const modelSize = new THREE.Vector3();
    bbox.getSize(modelSize);

    // Calculate the scale factor to make the model have a desired size (e.g., 20 units in this case)
    const desiredSize = 100; // Adjust this value to control the size of the plane
    const scaleFactor = desiredSize / Math.max(modelSize.x, modelSize.y, modelSize.z);

    // Apply the scale factor to the model
    model.scale.set(scaleFactor, scaleFactor, scaleFactor);

    // Set shadow properties for all child meshes
    model.traverse(function(child) {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });

    // Position the boat at the desired height above the ground
    model.position.set(-200, 75, 200);
    model.rotation.y = Math.PI * 2 / 3;

    // Set a name to the boat for later reference
    model.name = "boat";

    // Add the scaled model to the scene
    scene.add(model);
});

// load mailbox object
glbLoader.load('./resources/props/mailbox.glb', function(gltf) {
    const model = gltf.scene;

    // Calculate the bounding box of the model to get its size
    const bbox = new THREE.Box3().setFromObject(model);
    const modelSize = new THREE.Vector3();
    bbox.getSize(modelSize);

    // Calculate the scale factor to make the model have a desired size (e.g., 20 units in this case)
    const desiredSize = 35; // Adjust this value to control the size of the plane
    const scaleFactor = desiredSize / Math.max(modelSize.x, modelSize.y, modelSize.z);

    // Apply the scale factor to the model
    model.scale.set(scaleFactor, scaleFactor, scaleFactor);

    // Set shadow properties for all child meshes
    model.traverse(function(child) {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });

    // Position the mailbox at the desired height above the ground
    model.position.set(-100, 140, 100);

    // Set a name to the mailbox for later reference
    model.name = "mailbox";

    // Add the scaled model to the scene
    scene.add(model);
});

// load mine object
glbLoader.load('./resources/props/mine.glb', function(gltf) {
    const model = gltf.scene;

    // Calculate the bounding box of the model to get its size
    const bbox = new THREE.Box3().setFromObject(model);
    const modelSize = new THREE.Vector3();
    bbox.getSize(modelSize);

    // Calculate the scale factor to make the model have a desired size (e.g., 20 units in this case)
    const desiredSize = 150; // Adjust this value to control the size of the plane
    const scaleFactor = desiredSize / Math.max(modelSize.x, modelSize.y, modelSize.z);

    // Apply the scale factor to the model
    model.scale.set(scaleFactor, scaleFactor, scaleFactor);

    // Set shadow properties for all child meshes
    model.traverse(function(child) {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });

    // Position the mine at the desired height above the ground
    model.position.set(-150, 75, -225);
    model.rotation.y = Math.PI * 2;

    // Set a name to the mine for later reference
    model.name = "mine";

    // Add the scaled model to the scene
    scene.add(model);
});
}

// Background

function getBackground(){
  // set up skybox based on time of day

  // get the current time
  const time = new Date().getHours();
  // set the skybox based on the time of day
  if (time >= 6 && time < 20) {
      const cubeTextureLoader = new THREE.CubeTextureLoader();
      const cubeTexture = cubeTextureLoader.load([
          './resources/skybox/day/right.jpg',
          './resources/skybox/day/left.jpg',
          './resources/skybox/day/top.jpg',
          './resources/skybox/day/bottom.jpg',
          './resources/skybox/day/front.jpg',
          './resources/skybox/day/back.jpg'
      ]);
      scene.background = cubeTexture;
  } 
  else {
      const cubeTextureLoader = new THREE.CubeTextureLoader();
      const cubeTexture = cubeTextureLoader.load([
          './resources/skybox/night/right.jpg',
          './resources/skybox/night/left.jpg',
          './resources/skybox/night/top.jpg',
          './resources/skybox/night/bottom.jpg',
          './resources/skybox/night/front.jpg',
          './resources/skybox/night/back.jpg'
      ]);
      scene.background = cubeTexture;
  }
}

// Clean Up

function cleanUp() {
  // Dispose of any objects or geometries you've created to prevent memory leaks.
  scene.traverse(function (object) {
    if (object.isMesh) {
      object.geometry.dispose();
      object.material.dispose();
    }
  });

  // Remove any event listeners to prevent potential memory leaks
  window.removeEventListener("resize", onWindowResize);
  window.removeEventListener("mousedown", mouseDown);
  window.removeEventListener("mousemove", mouseMove);
  window.removeEventListener("keydown", onDocumentKeyDown);
  window.removeEventListener("keyup", onDocumentKeyUp);

  // Dispose of the GLTFLoader
  glbLoader = null;

  // Dispose of the renderer and release its resources
  renderer.dispose();
}

const HomeScene = () => {
  const sceneRef = useRef(null);
 
  useEffect(() => {
    init(sceneRef.current);
    getProps();
    render();

    sceneRef.current.appendChild( renderer.domElement );

    // Start the animation loop
    animate();

    return () => {
      // Clean up Three.js resources and animation frame on unmount
      if (sceneRef.current) {
        cleanUp();
        sceneRef.current.removeChild(renderer.domElement);
      }

      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="home-scene">
      <div ref={sceneRef} />
    </div>
  );
};

export default HomeScene;
