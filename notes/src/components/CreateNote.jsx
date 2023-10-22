
const CreateNote = ({inputText,setInputText,saveHandler}) => {
  const char=100;
  const charLimit = char - inputText.length;
  return (
    <div className="note">
        <textarea 
        cols={10}
        rows={5}
        value={inputText}
        placeholder="Type...."
        maxLength={100}
        onChange={(e)=>setInputText(e.target.value)}
        >
        </textarea>
        <div className="note-footer">
            <span className="label">{charLimit} Left </span>
            <button onClick={saveHandler} className="note-save">Save</button>
        </div>
    </div>
  )
}


export default CreateNote