import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import axiosInstance from "../../axiosConfig/axiosInstance";
import { Card, SectionHeader, SectionWrapper } from "../../components";
import "./SearchPage.css";

const SearchPage = () => {
  const [movie, setValue] = useState("");
  let [movies, setArr] = useState(null);
  useEffect(() => {
    axiosInstance
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=29c7fe441820e96b87a9e582ba8f1cf7&query=${movie}`
      )
      .then((res) => {
        let m = res.data.results;
        console.log([...m]);
        setArr(res.data);
      });
  }, [movie]);
  console.log(movies);

  return (
    <div className="container">
      <form className="form-inline">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          value={movie}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </form>
      <div className="results">
        <div>
          <SectionWrapper>
            <SectionHeader>Search Results</SectionHeader>
            <div className="most-popular-items">
              {movies && <Card movies={movies} />}
            </div>
          </SectionWrapper>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
