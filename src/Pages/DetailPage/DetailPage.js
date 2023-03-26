import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axiosInstance from "../../axiosConfig/axiosInstance";
import Spinner from "../../components/Spinner/Spinner";
import "./DetailPage.css";

const DetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const loader = useSelector((state) => state.loader.loader);

  // const {
  //   data: movie,
  //   error,
  //   isPending,
  // } = UseFetch(
  //   "https://api.themoviedb.org/3/movie/" +
  //     id +
  //     "?api_key=29c7fe441820e96b87a9e582ba8f1cf7"
  // );

  useEffect(() => {
    axiosInstance
      .get(`${id}?api_key=29c7fe441820e96b87a9e582ba8f1cf7`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      {loader ? (
        <Spinner />
      ) : (
        <div className="blog-details">
          {movie && (
            <article className="">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="rounded mx-auto d-block"
                style={{ width: "300px" }}
                alt="ds"
              />
              <h2 className="pt-3">{movie.title}</h2>
              <div>{movie.overview}</div>
              <div>{movie.release_date}</div>
            </article>
          )}
        </div>
      )}
    </>
  );
};

export default DetailPage;
