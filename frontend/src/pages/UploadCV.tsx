import { useState } from "react";
import axiosClient from "../api/axiosClient";

export default function UploadCV() {
  const [cvId, setCvId] = useState<string | null>(null);

  const upload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    // @ts-ignore
    formData.append("cv", e.target.cv.files[0]);

    const { data } = await axiosClient.post("/cv/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });

    setCvId(data.cvId);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Upload CV</h1>
      <form onSubmit={upload}>
        <input name="cv" type="file" className="input" />
        <button className="btn mt-4">Upload</button>
      </form>

      {cvId && <p className="mt-4">Uploaded! CV ID: {cvId}</p>}
    </div>
  );
}
