import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./upcoming.css";
import axios from "../../axiosConfig";
import { IMAGE_URL } from "../../url";
import { useContext } from "react";
import { MovieContext } from "../../Context";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
// import { Typography } from "@material-ui/core";

function Upcoming() {
  const [upcoming, setupcoming] = useState();
  const { setId } = useContext(MovieContext);

  useEffect(() => {
    axios
      .get(`/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`)
      .then((response) => {
        setupcoming(response.data.results);
      });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    centerPadding: "30px",
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="main">
      {upcoming ? (
        <Slider {...settings} className="slider">
          {upcoming &&
            upcoming.map((data) => (
              <Link
                to="/movie"
                onClick={() => setId(data.id)}
                className="item"
                key={data.id}
              >
                <div>
                  <img src={IMAGE_URL + data.poster_path} alt="" />
                </div>
              </Link>
            ))}
        </Slider>
      ) : (
        <Loading width="400px" height="250px" />
      )}
      {/* 
      <Typography variant="subtitle1">
        find your favourate movies here
      </Typography> */}
    </div>
  );
}

export default Upcoming;
