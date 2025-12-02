import { Schema, model, Document } from "mongoose";

export interface IGeneratedApplication extends Document {
  userId: string;
  cvId: string;
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
      qualificationGaps: [String],
      cvImprovementSuggestions: [String],
      atsKeywordsFound: [String]
    }
  },
  { timestamps: true }
);

export default model<IGeneratedApplication>("GeneratedApplication", generatedApplicationSchema);
