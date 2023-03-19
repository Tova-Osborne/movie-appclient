import PropTypes from "prop-types";

export const MovieCard = ({ movieData, onMovieClick }) => {
  return (
    <div
      onClick={() => {
        onMovieClick(movieData);
      }}
    >
      {movieData.title}
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  genre: PropTypes.string,
  director: PropTypes.string,
  onMovieClick: PropTypes.func.isRequired,
};
