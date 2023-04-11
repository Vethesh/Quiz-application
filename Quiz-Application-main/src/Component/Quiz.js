import React, { useState } from "react";
import ReactConfetti from 'react-confetti';
const Quiz = () => {
  var qsns = [
    {
      question: "Who Created React ?",
      anstext: [
        {
          Answer: "Google",
          isCorrect: false,
        },
        {
          Answer: "Meta",
          isCorrect: true,
        },
        {
          Answer: "Microsoft",
          isCorrect: false,
        },
        {
          Answer: "Yahoo",
          isCorrect: false,
        },
      ],
    },
    {
      question: "Who Created ChatGpt ?",
      anstext: [
        {
          Answer: "Google",
          isCorrect: false,
        },
        {
          Answer: "Meta",
          isCorrect: false,
        },
        {
          Answer: "Microsoft",
          isCorrect: true,
        },
        {
          Answer: "Yahoo",
          isCorrect: false,
        },
      ],
    },
    {
      question: "Time complexity of Binary Search ?",
      anstext: [
        {
          Answer: "O(N)",
          isCorrect: false,
        },
        {
          Answer: "O(log N)",
          isCorrect: true,
        },
        {
          Answer: "O(1)",
          isCorrect: false,
        },
        {
          Answer: "O(N log N)",
          isCorrect: false,
        },
      ],
    },
    {
      question: "Choose Minimum Spanning Tree Algo?",
      anstext: [
        {
          Answer: "Dijikstra's Algo",
          isCorrect: false,
        },
        {
          Answer: "Greedy Algo",
          isCorrect: false,
        },
        {
          Answer: "Kruskals Algo",
          isCorrect: true,
        },
        {
          Answer: "Bellman Ford Algo",
          isCorrect: false,
        },
      ],
    },
  ];

  console.log(qsns);

  const [cur, setCur] = useState(0);
  const [score, setscore] = useState(0);
  const [showscr, setShowscr] = useState(false);

  const handleAnswer = isCorrect => {
    if (isCorrect) {
      setscore(score + 1);
    }

    const nextqsn = cur + 1;

    if (nextqsn < qsns.length) {
      setCur(nextqsn);
    } else {
      setShowscr(true);
    }
  };

  const resetQuiz = () => {
    setCur(0);
    setscore(0);
    setShowscr(false);
  };

  return (
    <div className="mn">
      {showscr ? (
        <div className="scr">
          {score >cur/2?
          (<><div>
            you have scored {score} out of {qsns.length}
          </div>
          <ReactConfetti numberOfPieces={800} />
          </>):('You Failed the Exam!!!!')}
          <div className="btn">
            <button onClick={resetQuiz}>Reset</button>
          </div>

        </div>
      ) : (
        <div className="second-part">
          <div className="qsn">
            <div className="qsn_no">
              <span style={{ fontSize: "2rem", marginLeft: "1rem" }}>
                {" "}
                Question
              </span>
              <span style={{ fontSize: "2rem", marginLeft: "1rem" }}>
                {cur}
              </span>{" "}
              <span style={{ fontSize: "2rem" }}>/ {qsns.length}</span>
            </div>
            <div className="qsn_text">{qsns[cur].question}</div>
          </div>
          <div className="anss">
            {qsns[cur].anstext.map(answer => {
              return (
                <button onClick={() => handleAnswer(answer.isCorrect)}>
                  {answer.Answer}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
