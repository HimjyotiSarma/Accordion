import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

export default function SingleQuestion({
  id,
  title,
  info,
  showAccordion,
  handleShowAnswer,
}) {
  return (
    <article className={`question ${showAccordion ? 'open' : ''}`} key={id}>
      <header>
        <h5>{title}</h5>
        <span className="question-btn" onClick={handleShowAnswer}>
          {showAccordion ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </span>
      </header>
      {showAccordion && <p>{info}</p>}
    </article>
  )
}
