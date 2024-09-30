import { getFetchThen, getAwait } from "./api/movie";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    getFetchThen().then((result) => {});
  });

  const loadAwait = async () => {
    const result = await getAwait();
  };

  useEffect(() => {
    //loadFetchThen();
    loadFetchThen();
  }, []);
  return (
    <>
      {Data.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.title}</h1>
          <h2>{movie.genre}</h2>
          <p>{movie.actor}</p>
        </div>
      ))}
    </>
  );
};
export default App;
