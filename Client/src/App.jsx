import React, { useEffect, useState } from "react";
import axios from "axios";
import Songs from "./Songs";
import AddSong from "./AddSong";
import Navbar from "./Navbar";

const App = () => {
  const [songs, setSongs] = useState([]);
  const [showModel, setShowModel] = useState(false);
  const [reload, setReload] = useState(false);
  const [id, setId] = useState("");

  const url = "http://localhost:2000";

  useEffect(() => {
    const fetchData = async () => {
      const api = await axios.get(`${url}/`, {
        headers: {
          "Content-Type": "Application/json",
        },
      });
      console.log(api.data.songs);
      setSongs(api.data.songs);
    };
    fetchData();
  }, [reload]);

  const handleModel = () => {
    setShowModel(!showModel);
  };
  console.log("Getting ID for Edit", id);

  return (
    <>
      <Navbar />
      <AddSong
        handleModel={handleModel}
        showModel={showModel}
        setShowModel={setShowModel}
        url={url}
        reload={reload}
        setReload={setReload}
        id={id}
        setId={setId}
        songs={songs}
      />
      <Songs
        songs={songs}
        url={url}
        reload={reload}
        setReload={setReload}
        id={id}
        setId={setId}
        handleModel={handleModel}
      />
    </>
  );
};

export default App;
