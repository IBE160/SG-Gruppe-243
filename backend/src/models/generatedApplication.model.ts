import { Schema, model, Document, Types } from "mongoose";

export interface IGeneratedApplication extends Document {
  userId: Types.ObjectId;
  cvId: Types.ObjectId;
  jobDescription: string;
  generatedLetter: string;
  analysisResults: {
    qualificationGaps: string[];
    cvImprovementSuggestions: string[];
    atsKeywordsFound: string[];
  };
}

const generatedApplicationSchema = new Schema<IGeneratedApplication>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    cvId: { type: Schema.Types.ObjectId, ref: "CV", required: true },
    jobDescription: { type: String, required: true },
    generatedLetter: { type: String, required: true },
    analysisResults: {
      qualificationGaps: { type: [String], default: [] },
      cvImprovementSuggestions: { type: [String], default: [] },
      atsKeywordsFound: { type: [String], default: [] }
    }
  },
  { timestamps: true }
);

export default model<IGeneratedApplication>(
  "GeneratedApplication",
  generatedApplicationSchema
);