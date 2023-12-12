
import { useState } from 'react'
import data from './data.js'
import SingleQuestion from './SingleQuestion.jsx'

export default function Accordion() {
  const [questions, setQuestions] = useState(data)
  // const [showAnswer, setShowAnswer] = useState(false)
  const [boolSelectedArr, setBoolSelectedArr]=useState([false, false, false, false, false])



  const handleShowAnswer=(id, index)=>{
    questions.map((question)=>{
      if(question.id===id){
        return setBoolSelectedArr((prev)=>{
          const newArr= [...prev];
          newArr[index]=!newArr[index];
          return newArr
        })
      }
    })
  }


  const allQuestions = questions.map((question, index) => {
    return (
      <SingleQuestion key={question.id} id={question.id}  title={question.title}  info={question.info} showAccordion={boolSelectedArr[index]}  handleShowAnswer={()=>handleShowAnswer(question.id, index)}/>
    )
  })

  return <div className="container">
    <h1>Question</h1>    {allQuestions}</div>
}
