import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MoviesCard = ({ Movie }) => {
  const handleMovieClick = (movieID) => {
    console.log(movieID);
    localStorage.setItem("movieId", movieID);
  };
  console.log(Movie);
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "primary.main" }}>
            {Movie.title.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={Movie.title}
        titleTypographyProps={{
          sx: { fontWeight: "bold", color: "primary.main" },
        }}
      />
      <CardMedia
        component="img"
        sx={{
          height: 0,
          paddingTop: "56.25%",
        }}
        image={Movie.poster}
        title={Movie?.title}
      />
      <CardContent>
        <Typography gutterBottom color="secondary" variant="h5">
          YEAR: {Movie.year}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          TYPE: {Movie.type}
        </Typography>
      </CardContent>

      <CardActions>
        <Link to="/movie">
          <Button size="small" onClick={() => handleMovieClick(Movie.imdbID)}>
            View Details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

MoviesCard.propTypes = {
  Movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  }).isRequired,
};

export default MoviesCard;
