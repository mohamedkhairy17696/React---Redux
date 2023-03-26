import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../../axiosConfig/axiosInstance";
import { Card, SectionHeader, SectionWrapper } from "../../components";
import UseFetch from "../../useFetch";
import "./MostPopular.css";
import Spinner from "../../components/Spinner/Spinner";

function MostPopular() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState(null);
  let [disabled, setDisabled] = useState(false);
  const loader = useSelector((state) => state.loader.loader);

  // const {
  //   data: movies,
  //   isPending,
  //   error,
  // } = UseFetch(
  //   `https://api.themoviedb.org/3/movie/popular?api_key=29c7fe441820e96b87a9e582ba8f1cf7&page=${page}`
  // );
  useEffect(() => {
    axiosInstance
      .get(`/popular?api_key=29c7fe441820e96b87a9e582ba8f1cf7&page=${page}`)
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  const handleNext = (e) => {
    e.preventDefault();
    if (page < 500) {
      setPage(page + 1);
    } else {
      setPage(500);
      e.currentTarget.disabled = setDisabled(true);
    }
  };
  const handlePrev = (e) => {
    e.preventDefault();
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPage(1);
      e.currentTarget.disabled = setDisabled(true);
    }
  };

  return (
    <div>
      {loader ? (
        <Spinner />
      ) : (
        <div>
          <SectionWrapper>
            <SectionHeader>Most Popular</SectionHeader>
            <div className="most-popular-items">
              {movies && <Card movies={movies} />}
            </div>
          </SectionWrapper>
          <SectionWrapper>
            <div
              class="btn-group most-popular-items me-2 "
              role="group"
              aria-label="First group"
            >
              <button
                disabled={page <= 1 ? true : false}
                type="button"
                class="btn btn-dark"
                onClick={handlePrev}
              >
                Prev Page
              </button>

              <button
                disabled={page >= 500 ? true : false}
                type="button"
                class="btn btn-dark"
                onClick={handleNext}
              >
                Next Page
              </button>
            </div>
          </SectionWrapper>
        </div>
      )}
    </div>
  );
}

export default MostPopular;
