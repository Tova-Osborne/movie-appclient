export const MovieView = ({ movieData, onBackClick }) => {
  return (
    <div>
      <div>
        <span> Title: </span>
        <span>{movieData.title}</span>
      </div>
      <div>
        <span> Description: </span>
        <span>{movieData.description}</span>
      </div>
      <div>
        <span> Director: </span>
        <span>{movieData.director.name}</span>
      </div>
      <div>
        <span> Genre: </span>
        <span>{movieData.genre.name}</span>
      </div>
      <button onClick={onBackClick}>Home</button>
    </div>
  );
};
