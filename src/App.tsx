import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import DetailPageWrapper from "./pages/DetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="add/" element={<AddPage />} />
          <Route path="/detail/:id" element={<DetailPageWrapper />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
