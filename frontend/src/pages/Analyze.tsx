import { useState } from "react";
import axiosClient from "../api/axiosClient";
import { useNavigate } from "react-router-dom";

export default function Analyze() {
  const [cvId, setCvId] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const navigate = useNavigate();

  const analyze = async () => {
    const { data } = await axiosClient.post("/analysis", { cvId, jobDescription });
    localStorage.setItem("analysis", JSON.stringify(data));
    navigate("/results");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Analyze CV</h1>

      <input
        type="text"
        placeholder="CV ID"
        className="input"
        onChange={(e) => setCvId(e.target.value)}
      />

      <textarea
        placeholder="Paste job description here"
        className="input h-40"
        onChange={(e) => setJobDescription(e.target.value)}
      />

      <button className="btn mt-4" onClick={analyze}>
        Analyze
      </button>
    </div>
  );
}
