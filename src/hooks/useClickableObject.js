import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// Custom hook to make an object clickable
const useClickableObject = (objectName, onClickCallback, scene, fixedCamera) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    function mouseMove(event) {
      event.preventDefault();

      const mouse = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, fixedCamera);
      const intersects = raycaster.intersectObject(scene.getObjectByName(objectName));

      if (isMounted.current) {
        setIsMouseOver(intersects.length > 0);
        document.body.style.cursor = intersects.length > 0 ? 'pointer' : 'auto';
      }
    }

    function handleClick() {
      if (isMouseOver && onClickCallback) {
        onClickCallback();
      }
    }

    window.addEventListener('mousemove', mouseMove, false);
    window.addEventListener('click', handleClick, false);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [objectName, onClickCallback]);

  return isMouseOver;
};

export default useClickableObject;
