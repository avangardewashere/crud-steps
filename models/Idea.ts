import mongoose, { Schema } from "mongoose";

const IdeaSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Idea = mongoose.models.Idea || mongoose.model("Idea", IdeaSchema);

export default Idea;