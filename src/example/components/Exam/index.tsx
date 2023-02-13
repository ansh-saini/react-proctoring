import React from 'react'

type Props = {}

const questions = [
  {
    id: 1,
    text: 'JavaScript is a',
    options: ['staticly typed language', 'dynamically typed language'],
  },
  {
    id: 2,
    text: 'TypeScript is a',
    options: ['superset of JavaScript', 'subset of JavaScript'],
  },
]

const Exam = (props: Props) => {
  return (
    <div
      style={{
        padding: '12px 32px',
        backgroundColor: '#cbffcc',
      }}
    >
      <h1>Exam in progress!</h1>

      {questions.map((q, i) => (
        <div className="question">
          <h4>Question {i + 1}</h4>
          <p>{q.text}</p>
          {q.options.map((option) => (
            <>
              <input
                style={{ marginInlineEnd: 8, marginBottom: 8 }}
                type="radio"
                id={option}
                name={`question${q.id}`}
                value={option}
              />
              <label htmlFor="html">{option}</label>
              <br />
            </>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Exam
