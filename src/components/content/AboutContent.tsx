import { AboutTitle } from "../about/AboutTitle";
import { EducationSection } from "../about/EducationSection";

export const AboutContent = () => {
  return (
    <div
      style={{
        position: "relative",
        pointerEvents: "none",
        zIndex: 1,
        background: "rgba(255, 255, 255, 0.8)",
        display: "flex",
        flexDirection: "column",
        width: "97.5%",
        height: "85%",
        padding: "2rem",
        borderRadius: "8px",
      }}
    >
      <AboutTitle />
      <EducationSection />
      <section>
        <h2>Technical Achievements</h2>
        <p>
          Over the course of my career, I have [Describe specific achievements,
          e.g., "developed cutting-edge 3D web applications," "contributed to
          open-source projects," "built scalable web applications," etc.]. My
          work has been recognized for [mention any awards, recognitions, or
          notable projects].
        </p>
      </section>
      <section>
        <h2>Skills & Expertise</h2>
        <p>
          My technical expertise includes [List key skills, e.g., "JavaScript,
          React, Node.js, WebGL, Three.js," etc.]. I am always eager to learn
          new technologies and push the boundaries of what can be achieved on
          the web.
        </p>
      </section>
    </div>
  );
};
