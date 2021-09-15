import React, { useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";
import axios from "../../axiosConfig";
import { IMAGE_URL } from "../../url";
import { useContext } from "react";
import { MovieContext } from "../../Context";
import StarIcon from "@material-ui/icons/Star";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

function Movie({ catogary }) {
  const { setId } = useContext(MovieContext);
  const classes = useStyles();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(catogary).then((response) => {
      setMovies(response.data.results);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {movies.map((movie) => (
        <Link
          key={movie.id}
          className={classes.link}
          to="/movie"
          onClick={() => setId(movie.id)}
        >
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={movie.title ? movie.title : movie.name}
                height="220"
                image={IMAGE_URL + movie.poster_path}
                title={movie.title}
              />
              <CardContent className={classes.CardContent}>
                <Typography
                  className={classes.title}
                  gutterBottom
                  variant="h6"
                  component="h2"
                >
                  {movie.title ? movie.title : movie.name}
                </Typography>
                <div className={classes.CardBottom}>
                  <Typography variant="subtitle1">
                    <ThumbUpAltIcon
                      className={classes.star}
                      style={{
                        color: "grey",
                      }}
                    />
                    {movie.popularity}
                  </Typography>
                  <Typography variant="subtitle1">
                    <StarIcon className={classes.star} />
                    {movie.vote_average}
                  </Typography>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      ))}
    </>
  );
}

export default Movie;
