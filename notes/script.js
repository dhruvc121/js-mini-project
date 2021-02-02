const notes=document.getElementById("notes")
const newNote=document.getElementById("newNote")
newNote.addEventListener("click",()=>{
	addNote()
})
function addNote(){
	const newNote=document.createElement("div");
	newNote.classList.add("notes");
	newNote.innerHTML=`<div class="tools">
			
			<button id="editNote" class="fas fa-edit"></button>
			<button id="deleteNote" class="fas fa-trash"></button>	
		</div>
		<textarea >	</textarea>`
	document.body.appendChild(newNote)
	const deleteNote=newNote.querySelector("#deleteNote")
	deleteNote.addEventListener("click",()=>{
		newNote.remove()
	})
	const editNote=newNote.querySelector("#editNote")
	editNote.addEventListener("click",()=>{
		const textarea=newNote.querySelector("textarea")
		textarea.toggleAttribute("disabled")
	})
	
}