import { useState, useEffect } from "react";
import { fetchMovieDetails } from "./Services";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // To access search state

  const location = useLocation(); 

  useEffect(() => {
    const getMovieDetails = async () => {
      setError("");
      try {
        const data = await fetchMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError(err.message);
      }
    };
    getMovieDetails();
  }, [id]);

  const goBackToSearch = () => {
    navigate("/", {
      state: {
        searchTerm: location.state?.searchTerm,
        page: location.state?.page,
        type: location.state?.type,
      },
    });
  };

  if (error) return <p className="text-red-500">{error}</p>;

  if (!movie)
    return (
      <p className="text-blue-500 font-poppins h-screen flex justify-center items-center ">
        Loading...
      </p>
    );

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row font-poppins">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full md:w-1/3 rounded-md"
        />
        <div className="md:ml-4 space-y-4">
          <h1 className="text-5xl font-bold">{movie.Title}</h1>
          <p className=" text-blue-700">
            {" "}
            <span className="font-bold  ">Year :</span> {movie.Year}
          </p>
          <p className=" text-black">
            <span className="font-bold  ">Genre :</span> {movie.Genre}
          </p>
          <p className=" text-black">
            <span className="font-bold  ">Actors :</span> {movie.Actors}
          </p>
          <p className="text-justify">{movie.Plot}</p>
          <p className=" text-black">
            <span className="font-bold text-orange-400 ">Ratings :</span>{" "}
            {movie.Ratings.map((r) => `${r.Source}: ${r.Value}`).join(", ")}
          </p>
          <button
            onClick={goBackToSearch}
            className="text-green-700 bg-white px-8 py-2 rounded-lg hover:font-bold hover:text-green-500 hover:bg-slate-50 mb-4"
          >
            Back to search results
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;