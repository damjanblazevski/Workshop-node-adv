import { Schema, model } from "mongoose";

const songSchema = new Schema({
  name: {
    type: String,
    minLength: 2,
    required: true,
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: "Artist",
    required: true,
  },
  genre: {
    type: String,
    minLength: 2,
    required: true,
  },
});

const Songs = model("Songs", songSchema);

export default Songs;
