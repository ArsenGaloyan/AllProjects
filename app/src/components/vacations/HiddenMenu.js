 export default function HiddenMenu ({selectedTags,setSelectedTags}) {
	const handleClickDeleteTag =(tag)=>{
		setSelectedTags(selectedTags.filter(el=> el !== tag))
	}
	const handleClickDeleteTags = ()=>{
		setSelectedTags([])
		
	}
	return(
		<div className="selectedTags">
			<div className="tags">
		{selectedTags.map(tag =>(
			<div className="selectedTag">{tag}<button onClick = {()=>handleClickDeleteTag(tag)}className="selectedTagDelete">X</button></div>
		))}

			</div>
			<div>
          <button onClick={handleClickDeleteTags} className="buttonClear">Clear</button>
        </div>
			</div>


		
	)
}