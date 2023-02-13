import React from 'react'

type Props = {
  onClick: VoidFunction
}

const ExamIntro = (props: Props) => {
  return (
    <div className="exam-intro-root">
      <h1>Welcome to the exam</h1>
      <div>
        <button onClick={props.onClick}>Continue</button>
      </div>
    </div>
  )
}

export default ExamIntro
