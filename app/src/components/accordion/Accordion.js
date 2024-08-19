import { questionList } from "../../data/AccordionData";
import "./accordion.css";
import { useState } from "react";

export const Accordion = () => {
  const [showAnswer, setShowAnswer] = useState({
    0: false,
    1: false,
    2: false,
  });
  // const isOpen = (index) => showAnswer.includes(index)

  const handleClickChangeAnswer = (index) => {
    // showAnswer === index?setShowAnswer(-1):setShowAnswer(index);
    // const isOpen = showAnswer.includes(index)
    // if(isOpen){
    //   setShowAnswer(showAnswer.filter(item =>item!==index))
    // }
    // else{
    //   setShowAnswer([...showAnswer,index])
    // }
    setShowAnswer({...showAnswer,[index]:!showAnswer[index]})
  
  };

  return (
    <ul className="accordion">
      {questionList.map((obj, index) => {
        // const isOpen = showAnswer.includes(index)
        return (
          <li className="accordionItem" key={index}>
            <div className="accordionQuestion">
              <button
                onClick={() => handleClickChangeAnswer(index)}
                className="accordion-header"
              >
                {obj.question}
                <img
                  width={25}
                  src={
                    showAnswer[index] ? "./img/upload.png" : "./img/down-arrow.png"
                  }
                />
              </button>
            </div>

            <div className="accordionCollaps">
              {  showAnswer[index] && <p className="accordionBody">{obj.answer}</p>}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default Accordion;
