import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './routes/projects';
import Header from './widgets/header';
import Quake2 from './routes/projects/quake2';
import Quake4 from './routes/projects/quake4';
import Twitter from './routes/projects/twitter';
import Flixster from "./routes/projects/flixster";
import Home from "./routes/home"
import Blog from "./routes/blog"
import './App.css';

const App = () => {

  return (
    <div className="app">
      <BrowserRouter>

        <Header />
        <div className="app-content">
          <div className="app-content-wrap">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/projects/quake2" element={<Quake2 />} />
              <Route path="/projects/quake4" element={<Quake4 />} />
              <Route path="/projects/twitter" element={<Twitter />} />
              <Route path="/projects/flixster" element={<Flixster />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
