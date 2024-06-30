import mongoose from 'mongoose'

const SongSchema = new mongoose.Schema({
    song_name:{
        type: String,
        require: true,
    },
    artist_name:{
        type: String,
        require: true,
    },
    album_name:{
        type: String,
        require: true,
    },
    added_On:{
        type: Date,
        default: Date.now,
    }
})

export const Song = mongoose.model("Song", SongSchema)