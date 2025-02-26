

import { PropTypes } from 'prop-types'
const MovieCard = ({ movie, onClick, onStarClick, isStarred }) => {
  return (
    <div
      className="bg-white shadow-inner shadow-gray-300 hover:scale-105 transition rounded-lg p-4 space-y-6 mb-10"
      onClick={onClick}
    >
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"}
        alt={movie.Title}
        className="w-full h-64  rounded-md cursor-pointer"
      />
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-bold  font-poppins mt-2">
            {movie.Title}
          </h3>
          <p className="text-gray-600 font-poppins">{movie.Year}</p>
        </div>
        {/* Star Button */}
        <button onClick={onStarClick} className="mt-2 text-xl font-bold">
          {isStarred ? "⭐" : "☆"}
        </button>
      </div>
      <div>
        <button className="bg-white text-green-400 hover:font-bold hover: text-green-700 border- bg-green-200 mt-2 font-poppins rounded-lg w-full py-2">
          View Details
        </button>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  onStarClick: PropTypes.func.isRequired,
  isStarred: PropTypes.bool.isRequired,
};

export default MovieCard;