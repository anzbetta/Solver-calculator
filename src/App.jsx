import { useState } from "react";
import Result from "./Result";
import UploadFile from "./UploadFile";
import { solve } from "./script";
import "./App.css";


export default function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Отримуємо файл з UploadFile компонента
  function handleFileSelect(selectedFile) {
    setFile(selectedFile);
    setResult(null);
  }

  // Calculate (default або upload файл)
  async function handleCalculate() {
    let text;

    try {
      setLoading(true);

      if (file) {
        text = await file.text();
      } else {
        const response = await fetch("/source.txt");
        text = await response.text();
      }

      const res = solve(text);
      setResult(res.result);

    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
} 


  return (
    <div className="wrapper">
      <div className="card">
        <h1>Solver Card</h1>

        <p>
          Calculate result from default file or upload your own.
        </p>

        <UploadFile onFileSelect={handleFileSelect} />

        <div className="bttns">
          <button onClick={handleCalculate} disabled={loading}>
            {loading ? "Calculating..." : "Calculate"}
          </button>
        </div>

        {loading && (
          <div className="loader"></div>
        )}

        {!loading && result !== null && (
          <Result value={result} />
        )}
      </div>
    </div>
  );

}
