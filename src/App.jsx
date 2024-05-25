import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import SearchPage from "./components/SearchPage";
import MovieDetails from "./components/MovieDetails";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const AppTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <AppTitle>Movie Search App</AppTitle>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/movie" element={<MovieDetails />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
