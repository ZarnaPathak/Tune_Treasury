import React, { useEffect, useState } from "react";
import axios from "axios";

const AddSong = ({
  handleModel,
  showModel,
  setShowModel,
  url,
  reload,
  setReload,
  id,
  setId,
  songs,
}) => {
  const [song_name, setSongName] = useState("");
  const [artist_name, setArtistName] = useState("");
  const [album_name, setAlbumName] = useState("");

  useEffect(() => {
    if (id) {
      for (let i = 0; i < songs.length; i++) {
        if (id === songs[i]._id) {
          setSongName(songs[i].song_name);
          setArtistName(songs[i].artist_name);
          setAlbumName(songs[i].album_name);
          break;
        }
      }
    }
  }, [id]);

  const submitHandler = async (e) => {
    e.preventDefault();
    //console.log(song_name, artist_name, album_name);
    handleModel();

    if(id){
      //Editing data to API
    const api = await axios.put(
      `${url}/${id}`,
      { song_name, artist_name, album_name },
      {
        headers: {
          "Content-Type": "Application/json",
        },
      }
    );
    }else{
      //sending data to API
    const api = await axios.post(
      `${url}/`,
      { song_name, artist_name, album_name },
      {
        headers: {
          "Content-Type": "Application/json",
        },
      }
    );
    }

    setReload(!reload);
    setSongName("")
    setArtistName("")
    setAlbumName("")
    setId("") 
  };

  return (
    <>
      <div className="container mt-5" style={{ width: "200px" }}>
        <button
          className="btn btn-light btn-outline-dark"
          onClick={() => {
            {
              handleModel();
              setShowModel(!showModel);
            }
          }}
        >
          Add Song
        </button>

        {showModel && (
          <div
            className="modal"
            tabIndex="-1"
            role="dialog"
            style={{ display: "block" }}
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content p-3 bs-tertiary-bg">
                <div className="modal-header d-flex justify-content-center align-items-center">
                  <h5 className="fs-3">{id ? "Edit Song" : "Add Song"}</h5>
                </div>
                <div className="modal-body">
                  {/* Form  */}
                  <form onSubmit={submitHandler}>
                    <div className="mb-3">
                      <label className="form-label">Song Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={song_name}
                        onChange={(e) => {
                          setSongName(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Artist Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={artist_name}
                        onChange={(e) => {
                          setArtistName(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Album Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={album_name}
                        onChange={(e) => {
                          setAlbumName(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div className="mb-3 d-flex justify-content-center align-items-center">
                      {id ? (
                        <button type="submit" className="btn btn-primary mx-2">
                          Edit Song
                        </button>
                      ) : (
                        <button type="submit" className="btn btn-primary mx-2">
                          Add Song
                        </button>
                      )}

                      <button
                        type="submit"
                        className="btn btn-danger"
                        onClick={handleModel}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AddSong;
