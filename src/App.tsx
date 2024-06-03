import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { LandingPage } from "./pages/LandingPage";
import { Research } from "./pages/Research";
import { Design } from "./pages/Design";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} />
          <Route path={"/research"} element={<Research />} />
          <Route path={"/design"} element={<Design />} />
        </Route>
      </Routes>
  </BrowserRouter>
  )
}

export default App
