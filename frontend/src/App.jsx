import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/layout/Navbar.jsx";
import Quote from "./components/layout/Quote.jsx";
import Footer from "./components/layout/Footer.jsx";

import Hero from "./sections/hero/Hero.jsx";
import Projects from "./sections/projects/Projects.jsx";
import WorkPage from "./pages/Work/WorkPage.jsx";
import ResumePage from "./pages/resume/ResumePage.jsx";
import BlogPage from "./pages/blog/BlogPage.jsx";

import "./App.css";


function Home() {
  return (
    <>
      <Hero />
      <Projects />
    </>
  );
}


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{
          opacity: 0,
          y: 8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -6,
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}


function AppContent() {
  const location = useLocation();

  const page =
    location.pathname === "/"
      ? "home"
      : location.pathname.replace("/", "");

  return (
    <div className="site-shell">

      <Navbar />

      <AnimatedRoutes />

      <Quote page={page} />

      <Footer />

    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}


export default App;