import React, { useState, useEffect } from "react";
import { Button, Typography } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import TheatersIcon from "@material-ui/icons/Theaters";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import styled from "styled-components";
import axios from "../../axiosConfig";
import { IMAGE_URL } from "../../url";
import { useContext } from "react";
import { MovieContext } from "../../Context";
import { Link } from "react-router-dom";

function MovieExpand() {
  const [moviedtls, setMoviedtls] = useState();
  const { id } = useContext(MovieContext);

  useEffect(() => {
    axios
      .get(`/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
      .then((response) => {
        setMoviedtls(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(moviedtls);

  return (
    <>
      {moviedtls && (
        <Container>
          <LeftContainer>
            <Typography variant="h4">{moviedtls.original_title}</Typography>
            <Typography variant="subtitle2">{moviedtls.tagline}</Typography>

            <DetailsList>
              <Linka href="#" onClick={(e) => e.preventDefault()}>
                Rating
                <StarIcon
                  style={{
                    color: "yellow",
                  }}
                />
                : {moviedtls.vote_average}
              </Linka>
              <Linka href="#" onClick={(e) => e.preventDefault()}>
                Popularity
                <ThumbUpAltIcon
                  style={{
                    color: "white",
                    width: "20px",
                  }}
                />
                : {moviedtls.popularity}
              </Linka>
              <Linka href="#" onClick={(e) => e.preventDefault()}>
                Runtime
                <TheatersIcon
                  style={{
                    color: "white",
                    width: "20px",
                  }}
                />
                : {moviedtls.runtime}min
              </Linka>
              <Linka href="#" onClick={(e) => e.preventDefault()}>
                Year
                <CalendarTodayIcon
                  style={{
                    color: "white",
                    width: "20px",
                  }}
                />
                : {moviedtls.release_date}
              </Linka>
            </DetailsList>
            <Typography variant="subtitle2">{moviedtls.overview}</Typography>
            <BottomList>
              <List>
                <Linka href={moviedtls.homepage} target="_blank">
                  <Button
                    variant="contained"
                    style={{
                      width: "400px",
                      fontWeight: "bold",
                    }}
                    startIcon={<PlayCircleFilledIcon />}
                  >
                    watch Now
                  </Button>
                </Linka>
              </List>
            </BottomList>
          </LeftContainer>
          <RightContainer>
            <Image src={IMAGE_URL + moviedtls.poster_path} alt="" />
            <Link
              to={"/movie/youtube"}
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
            >
              <Button
                variant="text"
                style={{
                  color: "#Fff",
                  width: "100%",
                  backgroundColor: "#000",
                }}
              >
                Watch Trailor
              </Button>
            </Link>
          </RightContainer>
        </Container>
      )}
    </>
  );
}
const Container = styled.div`
  display: flex;
  padding: 50px;
  flex-wrap: wrap;
  background-color: #161b22;
  color: #fff;
  min-height: 80.4vh;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    padding: 20px;
  }
`;
const LeftContainer = styled.div`
  margin-top: 30px;
  width: 60%;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
const DetailsList = styled.div`
  margin: 10px 0;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;
const Linka = styled.a`
  text-decoration: none;
  color: #60e9cd;
  display: flex;
  gap: 3px;
`;
const BottomList = styled.div`
  margin-top: 30px;
`;
const List = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  width: 300px;
  font-size: 15px;
`;
const RightContainer = styled.div`
  margin: 20px;
`;
const Image = styled.img`
  margin: 0 auto;
  width: 100%;
  height: 80vh;
  @media screen and (max-width: 600px) {
    height: 50vh;
  }
`;
export default MovieExpand;
