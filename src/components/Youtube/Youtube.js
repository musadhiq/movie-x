import React from "react";
import { useState, useEffect, useContext } from "react";
import { MovieContext } from "../../Context";
import axios from "../../axiosConfig";
import YouTube from "react-youtube";
import "./youtube.css";

function Youtube() {
  const [mid, setmId] = useState();
  const { id } = useContext(MovieContext);

  useEffect(() => {
    axios
      .get(`/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`)
      .then((response) => {
        setmId(response.data.results[0]);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className="container">
      {mid && (
        <YouTube
          videoId={mid.key} // defaults -> null
          id={id}
          className="youtube"
          containerClassName="youtubeContainer"
          opts={opts}
        />
      )}
    </div>
  );
}

export default Youtube;
