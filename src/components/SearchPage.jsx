import { useState, useEffect } from "react";
import { searchMovies, getRecentSearchQueries } from "../api";
import MoviesCard from "./MoviesCard";
import SearchHistory from "./SearchHistory";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-bottom: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
`;

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [queries, setQueries] = useState([]);
  console.log(results);
  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const data = await getRecentSearchQueries();
        setQueries(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchQueries();
  }, []);

  const handleSearch = async () => {
    setError(null);
    try {
      const data = await searchMovies(query);
      setResults(data);
      const recentQueries = await getRecentSearchQueries();
      setQueries(recentQueries);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies"
      />
      <Button onClick={handleSearch}>Search</Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Grid container spacing={4}>
        {results.map((movie) => (
          <Grid item xs={3} key={movie.imdbID}>
            <MoviesCard Movie={movie} />
          </Grid>
        ))}
      </Grid>
      <SearchHistory queries={queries} />
    </SearchContainer>
  );
};

export default SearchPage;
