import { useState, useEffect } from "react";
import "./vacation.css";
import { arr } from "../../data/vacationData";
import VacationItem from "./VacationItem";
import HiddenMenu from "./HiddenMenu";
function Vacation() {
  const [isVision, setIsVision] = useState(true);
  console.log(arr);
  const [selectedTags, setSelectedTags] = useState([]);
  const [array, setArray] = useState(arr);

    const getFilteredArray = () => {
      return arr.filter((obj) => {
        const tags = [obj.role, obj.level, ...obj.languages, ...obj.tools];
        return selectedTags.every((el) => tags.includes(el));
      });
    }
    
    const filtredArray = getFilteredArray()

  return (
    <>
      <img className="backGround" src="img/bg-header-desktop.svg" />
      {isVision && <HiddenMenu selectedTags = {selectedTags} setSelectedTags={setSelectedTags} />}
      
      {filtredArray.map((vacation) => (
        <VacationItem
          img={vacation.img}
          company={vacation.company}
          isNew={vacation.new}
          isFeatured={vacation.featured}
          position={vacation.position}
          postedAt={vacation.postedAt}
          contract={vacation.contract}
          location={vacation.location}
          role={vacation.role}
          level={vacation.level}
          languages={vacation.languages }
          tools={vacation.tools}
          selectedTags = {selectedTags}
          setSelectedTags = {setSelectedTags}
          array = {array}
          setArray = {setArray}
        />
      ))}
    </>
  );
}

export default Vacation;
