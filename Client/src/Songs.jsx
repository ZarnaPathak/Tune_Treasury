import React from "react";
import axios from "axios";
import music_jpeg from "../public/music_jpeg.jpg"

const Songs = ({ songs, url, reload, setReload, setId, handleModel }) => {
  const deleteSong = async (id) => {
    const api = await axios.delete(`${url}/${id}`, {
      headers: {
        "Content-Type": "Application/json",
      },
    });
    console.log("Song Deleted Successfully..!", api);
    setReload(!reload);
  };

  return (
    <>
      <div className=" row container justify-content-center mt-5">
        {songs.map((data) => (
          <div
            key={data._id}
            className="row mt-3 d-flex justify-content-center"
          >
    
            <div className="col-lg-8 d-flex justify-content-center">
            <div className="col-sm-3 .bg-dark.bg-gradient" ><img src={music_jpeg} className="rounded border border-secondary" style={{height:'200px',width:"200px"}}></img></div>
              <div className="card bg-secondary bg-gradient text-light col-sm-5">
                <div className="card-body">
                  <h5 className="card-title">{data.song_name}</h5>
                  <p className="card-text"><i className="fa-solid fa-headset text-dark"></i>&nbsp;&nbsp;{data.artist_name} </p>
                  <p className="card-text"><i class="fa-solid fa-compact-disc text-dark"></i>&nbsp;&nbsp;{data.album_name}</p>
                  <button
                    className="btn btn-dark m-2"
                    type="button"
                    onClick={() => {
                      setId(data._id);
                      handleModel();
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-dark"
                    type="button"
                    onClick={() => deleteSong(data._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Songs;
