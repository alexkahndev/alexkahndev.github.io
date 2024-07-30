import "./assets/css/App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { AboutPage } from "./pages/AboutPage";
import { BlogPage } from "./pages/BlogPage";
import { Footer } from "./components/utils/Footer";
import { ContactPage } from "./pages/ContactPage";
import { useModelSprings } from "./hooks/useModelSprings";
import { useLinkSprings } from "./hooks/useLinkSprings";
import { useSharedMediaQuery } from "./hooks/useSharedMediaQuery";

export const App = () => {
  const modelScales = [2, 4, 5.5, 5, 0.6];

  const {
    modelSprings,
    handleModelHover,
    handleModelUnhover,
    handleModelClick,
  } = useModelSprings(modelScales);

  const {
    linkSprings,
    linkApi,
    handleLinkHover,
    handleLinkUnhover,
    handleLinkClick,
  } = useLinkSprings(5);

  useSharedMediaQuery();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              modelSprings={modelSprings}
              linkApi={linkApi}
              handleModelHover={handleModelHover}
              handleModelUnhover={handleModelUnhover}
              handleLinkHover={handleLinkHover}
              handleLinkUnhover={handleLinkUnhover}
              handleLinkClick={handleLinkClick}
              handleModelClick={handleModelClick}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer
        linkSprings={linkSprings}
        handleModelHover={handleModelHover}
        handleModelUnhover={handleModelUnhover}
        handleLinkHover={handleLinkHover}
        handleLinkUnhover={handleLinkUnhover}
        handleLinkClick={handleLinkClick}
      />
    </>
  );
};
