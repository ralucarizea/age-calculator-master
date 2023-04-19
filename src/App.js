import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form/Form";
import ResultsDisplay from "./components/Display/ResultsDisplay";
import "./assets/fonts/fonts.css";

export default function App() {
  const [inputData, setInputData] = useState({
    day: "- -",
    month: "- -",
    year: "- -",
  });
 
  return (
    <main className="card">
      <div className="card__body">
        <Form formData={inputData} setInputData={setInputData} />
        <ResultsDisplay displayData={inputData} />
      </div>
    </main>
  );
}
