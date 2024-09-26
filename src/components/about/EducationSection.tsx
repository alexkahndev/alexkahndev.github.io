export const EducationSection = () => {
  return (
    <section
      style={{
        width: "50%",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: "8px",
        padding: "2rem",
      }}
    >
      <h2>Education</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="/NJIT-Logo.png" alt="NJIT Logo" width="300%" />

        <p>
          I earned my Bachelor's degree in Computer Science from the New Jersey
          Institute of Technology, where I studied under expert faculty. My
          education provided a solid foundation in computer science and software
          engineering, and I had the opportunity to work on diverse projects.
          These projects ranged from mastering the fundamentals of computer
          graphics to exploring advanced rendering techniques for the next
          generation of web development.
        </p>
      </div>
    </section>
  );
};
