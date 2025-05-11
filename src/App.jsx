// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ContactForm from "./pages/ContactForm";
import BlogsPage from "./pages/BlogsPage";
import ProjectPage from "./pages/ProjectPage";
import AboutUsPage from "./pages/AboutUsPage";

import RootLayout from "./layouts/RootLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
