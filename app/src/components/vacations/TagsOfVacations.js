

function TagsOfVacation({tag, selectedTags, setSelectedTags, array,setArray, tags}) {
const handleClickAddTag =(tag)=>{
  setSelectedTags([...new Set([...selectedTags,tag])])
  
  console.log(tags)
  console.log(selectedTags)
  console.log(array.filter(obj => selectedTags.every(el => tags.includes(el))))
}
  return (
<button onClick = {() => handleClickAddTag(tag)} className="tag">{tag}</button>

  );
}

export default TagsOfVacation;
