import React, { useState } from "react";
import questions from "../api/questions.json";

const TestIriHati = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState([]);
  const [totalScore, setTotalScore] = useState(null);

  const handleScoreChange = (e) => {
    const updatedScore = [...score];
    updatedScore[currentQuestion] = Number(e.target.value);
    setScore(updatedScore);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateTotalScore();
    }
  };

  const calculateTotalScore = () => {
    const sum = score.reduce((acc, curr) => acc + curr, 0);
    setTotalScore(sum);
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setScore([]);
    setTotalScore(null);
  };

  const question = questions[currentQuestion];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-xl bg-white shadow-lg rounded-lg p-8 flex">
        <div className="w-1/2">
        <h2 className="text-3xl font-bold mb-4 items-center mr-3">{totalScore !== null ? "Hasil Test" : "Tes Iri Hati"}</h2>

          {totalScore === null && (
            <>
              <p className="text-lg font-semibold mb-4">{question.text}</p>
              <input
                type="range"
                min="1"
                max="5"
                className="w-full h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full appearance-none"
  style={{ outline: "none" }}
                value={score[currentQuestion] || "0"}
                onChange={handleScoreChange}
              />
              <div className="flex justify-between text-sm font-semibold text-gray-500">
                
                <span>0</span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
              </div>
              {currentQuestion === questions.length - 1 ? (
                <button
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg mt-4 hover:bg-blue-600 transition duration-300"
                  onClick={handleNextQuestion}
                >
                  Finish
                </button>
              ) : (
                <button
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg mt-4 hover:bg-blue-600 transition duration-300"
                  onClick={handleNextQuestion}
                >
                  Next Question
                </button>
              )}
            </>
          )}
          {totalScore !== null && (
            <button
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg mt-4 hover:bg-blue-600 transition duration-300"
              onClick={resetTest}
            >
              Ulangi Test
            </button>
          )}
         
        </div>
        {totalScore !== null && (
            <div className="mt-8">
            <p className="text-lg font-semibold mb-2">Total Score:</p>
            <p className="text-4xl font-bold text-blue-500">{totalScore}</p>
            {getMessage(totalScore) && (
              <p className="text-lg text-gray-600 mt-4">{getMessage(totalScore)}</p>
            )}
          </div>
          
          )}
        {totalScore === null && (
          <div className="w-1/2">
            <img src={question.image} className="mx-auto" alt="Gambar" />
          </div>
        )}
      </div>
    </div>
  );
};

const getMessage = (totalScore) => {
  if (totalScore < 2) {
    return "Kamu tidak iri hati";
  } else if (totalScore >= 2 && totalScore < 11) {
    return "Kamu lumayan iri hati!";
  } else if (totalScore >= 11 || totalScore === 15) {
    return "Kamu iri hati banget banget ANJING";
  }
};


export default TestIriHati;
