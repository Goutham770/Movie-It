
import { Route, Routes } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import MovieDetailPage from "./components/MovieDetailPage";
import StarredMoviesPage from "./components/StarredMoviesPage";


function App() {
  return (
    <>
      <div className="bg-white shadow-md py-4 mb-5">
        <h1 className="font-poppins font-bold text-purple-500 text-center  text-2xl uppercase tracking-widest">
          Movies Search App
        </h1>
      </div>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/starred" element={<StarredMoviesPage />} />
      </Routes>
    </>
  );
}

export default App;