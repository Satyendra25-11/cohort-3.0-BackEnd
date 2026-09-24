import mongoose from "mongoose";

const urlSchema = mongoose.Schema(
  {
    originalUrl: {
      type: String,
      required: true,
    },
    shortCode: {
      type: String,
      required: true,
    },
    clicks: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }, // for time of creating and updating
);


const urlModel = mongoose.model("urls", urlSchema)

export default urlModel;  