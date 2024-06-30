import express from "express";
import mongoose from "mongoose";
import { Song } from "./SongModel.js";
import bodyParser from "express";
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(cors({
  origin:true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))

mongoose
  .connect(
    "mongodb+srv://pathakzarna0128:MHqvpiNAAQeCKBfa@cluster0.ptzywh5.mongodb.net/",
    {
      dbName: "CRUD_MERN",
    }
  )
  .then(() => console.log("MongoDB Connected..!"))
  .catch((err) => console.log(err));

// Display Song [Read Operation]
app.get("/", async (req, res) => {
  try {
    let songs = await Song.find().sort({createdAt:-1});

    res.json({ message: "--: Songs List :--", songs });
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Add Song [Create Operation]
app.post("/", async (req, res) => {
  const { song_name, artist_name, album_name, added_On } = req.body;
  try {
    let song = await Song.findOne({ song_name });
    if (song) return res.json({ message: "Song already Exist..!!" });

    song = await Song.create({
      song_name,
      artist_name,
      album_name,
      added_On,
    });
    res.json({ message: "Song Added Successfully..!", song });
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Edit Song [Update Operation]
app.put("/:id", async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  try {
    let data = await Song.findByIdAndUpdate(id, updatedData, { new: true });
    res.json({ message: "Your Song has been Updated..!", data });
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Delete Song [Delete Operation]
app.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    let song = await Song.findById(id);
    if (!song) return res.json({ message: "Song doesn't Exist..!" });
    await song.deleteOne();
    res.json({ message: "Song has been Deleted..!" });
  } catch (error) {
    res.json({ message: res.error.message });
  }
});

app.listen(2000, () => console.log("Server is running on port 2000"));

// username : pathakzarna0128
// password : MHqvpiNAAQeCKBfa
