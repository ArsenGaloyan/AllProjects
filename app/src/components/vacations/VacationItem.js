import TagsOfVacation from "./TagsOfVacations"
function VacationItem ({img, company, isNew, isFeatured, position, postedAt, contract, location, role, languages,level,tools,selectedTags,setSelectedTags, array, setArray}) {
  const tags = [role,level, ...languages, ...tools]
    return (
                <div className="vacation">
                <img className="logoSvg" src={img} />
         <div className="featuredVacation">
          <div className="headFeatured">
            <p className="company">{company}</p>
            {isNew && <button className="newBtn">NEW</button>}
            {isFeatured && <button className="featured">FEATURED</button>}
          </div>
          <div className="professionAndСonditions">
            <p className="profession">{position}</p>
            <p className="condition">
              <ul className="shedule">
              <li> {postedAt}</li>
              <li>{contract}</li>
              <li>{location}</li>
              </ul> 
              </p>
          </div>
        </div>
        <div className="btnFilter">
          
          {tags.map(tag =>(
            <TagsOfVacation tag={tag} selectedTags = {selectedTags} setSelectedTags = {setSelectedTags} setArray = {setArray} array ={array} tags = {tags} />
          ))}
     

        </div> 
      </div>
    )
}

export default VacationItem