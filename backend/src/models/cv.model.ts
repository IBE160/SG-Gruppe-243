import { Schema, model, Document, Types } from "mongoose";

export interface ICV extends Document {
  userId: Types.ObjectId;
  originalFilename: string;
  storagePath: string;
  extractedText: string;
}

const cvSchema = new Schema<ICV>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    originalFilename: { type: String, required: true },
    storagePath: { type: String, required: true },
    extractedText: { type: String, required: true }
  },
  { timestamps: true }
);

export default model<ICV>("CV", cvSchema);