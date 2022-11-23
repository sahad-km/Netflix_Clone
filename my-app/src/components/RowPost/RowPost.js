import React, { useEffect, useState } from "react";
import YouTube from 'react-youtube'
import { API_KEY ,imageUrl} from "../../Constants/Constants";
import "./RowPost.css";
import axios from "../../axios";
function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId,setUrlId] = useState('');
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch(err => {
        // alert("Error Occured");
      });
  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const handleTrailer = (id) =>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results.length);
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0]);
      }else{
        alert("No related video to this Movie")
      }
    })
  }

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {   movies.map((obj)=>
            <img onClick={() => handleTrailer(obj.id)} className={props.isSmall ? "smallPoster": "poster"}
            alt="poster"
            src={`${imageUrl+obj.backdrop_path}`}
          />
        )

        }
      </div>
     {  urlId &&  <YouTube opts={opts} videoId={urlId.key} />  }
    </div>
  );
}

export default RowPost;
