import React, { useEffect, useRef, useState } from "react";

const DynamicLight = () => {
  const lightRef = useRef();
  const targetRef = useRef();

  const [ready, setReady] = useState(false); // To ensure the light properties are updated after the component has mounted

  const lightSettings = {
    morning: {
      intensity: 0.5,
      color: 0xffffff,
      position: [-5, 20, 4],
      targetPosition: [9, 0, -9],
    },
    midMorning: {
      intensity: 0.7,
      color: 0xffffff,
      position: [-5, 15, 4],
      targetPosition: [0, 0, 0],
    },
    afternoon: {
      intensity: 1,
      color: 0xffffff,
      position: [-5, 20, 4],
      targetPosition: [9, 0, -9],
    },
    dusk: {
      intensity: 0.5,
      color: 0xff9900,
      position: [5, 20, -4],
      targetPosition: [0, 0, 0],
    },
    evening: {
      intensity: 0.3,
      color: 0xff9900,
      position: [5, 20, -4],
      targetPosition: [0, 0, 0],
    },
    midnight: {
      intensity: 0.1,
      color: 0x000000,
      position: [5, 20, -4],
      targetPosition: [0, 0, 0],
    },
    earlyMorning: {
      intensity: 0.5,
      color: 0xffffff,
      position: [-5, 20, 4],
      targetPosition: [9, 0, -9],
    },
    lateAfternoon: {
      intensity: 1,
      color: 0xffffff,
      position: [-5, 20, 4],
      targetPosition: [9, 0, -9],
    },
    night: {
      intensity: 0.1,
      color: 0x000000,
      position: [5, 20, -4],
      targetPosition: [0, 0, 0],
    },
  };

  useEffect(() => {
    // Function to determine the time of day based on the current hour
    const getTimeOfDay = () => {
      const now = new Date();
      const hours = now.getHours();

      if (hours >= 5 && hours < 8) {
        return "morning";
      } else if (hours >= 8 && hours < 11) {
        return "midMorning";
      } else if (hours >= 11 && hours < 13) {
        return "afternoon";
      } else if (hours >= 13 && hours < 17) {
        return "dusk";
      } else if (hours >= 17 && hours < 19) {
        return "evening";
      } else if (hours >= 19 && hours < 21) {
        return "earlyMorning";
      } else if (hours >= 21 && hours < 24) {
        return "lateAfternoon";
      } else {
        return "night";
      }
    };

    // Get the current time of day
    const timeOfDay = getTimeOfDay();
    const currentLightSettings =
      lightSettings[timeOfDay] || lightSettings.night;

    // Update the light properties based on the current time of day
    if (lightRef.current && targetRef.current) {
      lightRef.current.intensity = currentLightSettings.intensity;
      lightRef.current.color.set(currentLightSettings.color);
      lightRef.current.position.set(...currentLightSettings.position);
      targetRef.current.position.set(...currentLightSettings.targetPosition);
      setReady(true); // Set to true to indicate that the light properties are updated
    }
  }, []);

  return (
    <>
      {/* HemisphereLight for ambient light */}
      <hemisphereLight
        intensity={lightSettings.night.intensity * 0.5}
        skyColor={lightSettings.night.color}
        groundColor={0x000000}
      />

      {/* DirectionalLight for the sun/moon */}
      <directionalLight
        ref={lightRef}
        color={lightSettings.night.color}
        intensity={lightSettings.night.intensity}
        castShadow
        shadow-camera-left={-45}
        shadow-camera-right={45}
        shadow-camera-top={45}
        shadow-camera-bottom={-45}
        position={lightSettings.night.position}
      />
      <primitive
        object={targetRef}
        position={lightSettings.night.targetPosition}
      />
    </>
  );
};

export default DynamicLight;
