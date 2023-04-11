import { Schema, model } from "mongoose";

const artistSchema = new Schema({
  firstName: {
    type: String,
    minLength: 2,
    required: true,
  },
  lastName: {
    type: String,
    minLength: 2,
    required: true,
  },
  artistName: {
    type: String,
    minLength: 2,
    required: true,
  },
  age: {
    type: Number,
    min: 16,
    max: 95,
    required: true,
  },
  totalSongs: {
    type: Number,
    min: 0,
    max: 999,
    required: true,
  },
  genre: {
    type: String,
    minLength: 2,
    required: true,
  },
});

const Artist = model("Artist", artistSchema);

export default Artist;
