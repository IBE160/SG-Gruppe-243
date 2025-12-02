export default function Results() {
  const data = JSON.parse(localStorage.getItem("analysis") || "{}");

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Results</h1>

      <h2 className="font-bold mt-4">AI Cover Letter</h2>
      <p className="whitespace-pre-wrap">{data.generatedLetter}</p>

      <h2 className="font-bold mt-4">Qualification Gaps</h2>
      <ul>
        {data.analysisResults?.qualificationGaps?.map((g: string) => (
          <li key={g}>• {g}</li>
        ))}
      </ul>

      <h2 className="font-bold mt-4">CV Improvement</h2>
      <ul>
        {data.analysisResults?.cvImprovementSuggestions?.map((s: string) => (
          <li key={s}>• {s}</li>
        ))}
      </ul>

      <h2 className="font-bold mt-4">ATS Keywords Found</h2>
      <ul>
        {data.analysisResults?.atsKeywordsFound?.map((k: string) => (
          <li key={k}>• {k}</li>
        ))}
      </ul>
    </div>
  );
}
