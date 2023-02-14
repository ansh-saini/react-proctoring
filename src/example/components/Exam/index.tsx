import React from 'react'
import questions from './questions'

type Props = {}

const Exam = (props: Props) => {
  return (
    <div
      style={{
        padding: '12px 32px',
        backgroundColor: '#cbffcc',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Exam in progress!</h1>

      {questions.map((q, i) => (
        <div className="question">
          <h4>Question {i + 1}</h4>
          <p style={{ whiteSpace: 'pre-wrap' }}>{q.text}</p>
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
