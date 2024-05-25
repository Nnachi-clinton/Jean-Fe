import {
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { getExtendedDetails } from "../api";

export default function MovieDetails() {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const storedId = localStorage.getItem("movieId");
        const data = await getExtendedDetails(storedId);
        setResults(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <h3>Loading...</h3>;
  if (!results) return <h3>Movie not found</h3>;

  return (
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <img
          src={results.poster}
          alt={results.title}
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h3">{results.title}</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h4" color="secondary">
          {results.runtime}
        </Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Director</TableCell>
                <TableCell>{results.director}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Genre</TableCell>
                <TableCell>{results.genre}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>{results.type}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Year</TableCell>
                <TableCell>{results.year}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Country</TableCell>
                <TableCell>{results.country}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Awards</TableCell>
                <TableCell>{results.awards}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Plot</TableCell>
                <TableCell>{results.plot}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>actors</TableCell>
                <TableCell>{results.actors}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>language</TableCell>
                <TableCell>{results.language}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
