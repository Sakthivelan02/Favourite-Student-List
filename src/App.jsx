import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StudentProvider } from "./pages/StudentContext";
import StudentListPage from "./pages/StudentListPage";
import FavouriteStudentsPage from "./pages/FavouriteStudentsPage";
import "./index.css";

export default function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<StudentListPage />} />
            <Route path="/favourites" element={<FavouriteStudentsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </StudentProvider>
  );
}
