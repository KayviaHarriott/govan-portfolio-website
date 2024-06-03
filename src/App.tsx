import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import './index.css'
import { LandingPage } from "./pages/LandingPage";
import { Research } from "./pages/Research";
import { Design } from "./pages/Design";
import { NavigationBar } from "./navigation/NavigationBar";
// Supports weights 200-800
import '@fontsource-variable/bricolage-grotesque';

function App() {

  return (
    <BrowserRouter>
    <NavigationBar/>
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
