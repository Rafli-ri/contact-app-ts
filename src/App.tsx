import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import DetailPage from "./pages/DetailPage";
import { ModalContextProvider } from "./store/ModalContext";
import Bookmark from "./pages/Bookmark";

function App() {
  return (
    <>
      <ModalContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="add/" element={<AddPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="bookmark/" element={<Bookmark />} />
          </Routes>
        </BrowserRouter>
      </ModalContextProvider>
    </>
  );
}

export default App;
