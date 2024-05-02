import { useState } from 'react'
import './App.css'
const quizData = [
  {
  question: "What is the capital city of France?",
  options: ["Paris", "London", "Berlin", "Madrid"],
  correctAnswer: "Paris",
  },
{
  question: "What is the largest mammal in the world?",
  options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
  correctAnswer: "Blue Whale",
},
{
  question: "Which planet is known as the Red Planet?",
  options: ["Earth", "Mars", "Jupiter", "Venus"],
  correctAnswer: "Mars",
},
{
  question: "Who painted the Mona Lisa?",
  options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"],
  correctAnswer: "Leonardo da Vinci",
},
{
  question: "Which element does 'O' represent on the periodic table?",
  options: ["Oxygen", "Gold", "Silver", "Carbon"],
  correctAnswer: "Oxygen",
},
{
  question: "What is the powerhouse of the cell?",
  options: ["Mitochondria", "Nucleus", "Endoplasmic Reticulum", "Ribosome"],
  correctAnswer: "Mitochondria",
},
{
  question: "Who wrote 'Romeo and Juliet'?",
  options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
  correctAnswer: "William Shakespeare",
},
]

export default function App(){
  const [showQuiz, setShowQuiz] = useState(true)
  return(
    <div className={`app ${showQuiz ? "hide" :''}`}>
      <h1>Quiz App</h1>
      <button onClick={()=> setShowQuiz((show)=> !show)} style={{height: "50px"}}>{!showQuiz ? "reset quiz" : "startQuiz"}</button>
      {!showQuiz ? <Quiz/>: null}
      
    </div>
  )
}
function Quiz(){
  const [showResults, setShowResults ] = useState(false)
  const [userAnswers, setUserAnswers ] = useState([])
  const [score, setScore] = useState(0)
  function handleAnswerClick(answer){
const isCorrect = answer === quizData[userAnswers.length].correctAnswer
if(isCorrect){setScore(score + 1)}
    setUserAnswers([...userAnswers, answer])
  }

  function handleSubmit(){
    setShowResults(true)
  }
  return(
    <div className="quiz-container">
      <button className="fixed" onClick={handleSubmit}>Submit Answers</button>
      {quizData.map((question, index)=>(
        <div className="question-container" key={index}>
          <h2>{question.question}</h2>
          {question.options.map((option, i)=>(
            <button className={
              `${userAnswers[index] === option ? "selected" : ''} 
              ${showResults && option === question.correctAnswer 
              ? "correct" : ""}`
            } onClick={()=> handleAnswerClick(option)} key={i}>{option}</button>
          ))}
          {showResults && (
          <div className="correct-answers">
            Correct Answer: <button style={{backgroundColor: "green", alignSelf: "end"}}>{question.correctAnswer}</button>
          </div>

          )}
        </div>
      ))}
     { showResults && <div className='score'>your score: {`${Math.round((score/7)*100)}%`}</div>}
    </div>
  )
}