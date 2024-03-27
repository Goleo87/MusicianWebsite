import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react"; 
import Layout from "./components/Layout";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Intro from './components/Intro';

function App() {
  const [introCompleted, setIntroCompleted] = useState(false);
  const handleIntroComplete = () => {
    setIntroCompleted(true);
  };

  return (
    <Routes>
      {!introCompleted && <Route path="/" element={<Intro onComplete={handleIntroComplete} />} />}
      {introCompleted && (
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      )}
    </Routes>
  );
}

export default App;


