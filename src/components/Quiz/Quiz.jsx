import React from 'react'
import './Quiz.css'

const Quiz = () => {
  return (
    <div>
      <div className="container">
        <h1>Quiz App</h1>
        <hr />
        <h2>Which command initializes a new Git repository? </h2>
        <ul>
            <li>git start</li>
            <li>git init</li>
            <li>git new</li>
            <li>git create</li>
        </ul>
        <button>Next</button>
        <div className="index">1 of 5 questions</div>
      </div>
    </div>
  )
}

export default Quiz
