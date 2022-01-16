const Editor = ({ markdown, setMarkdown}) => {
  return ( 
    <div className="w-75 mx-auto my-4 shadow">
      <form className="screen">
        <div className="bg-secondary d-flex align-items-center relative rounded-1">
          <div className="absolute">
            <i className="fas fa-circle ps-2 me-2 red"></i>
            <i className="fas fa-circle me-2 yellow"></i>
            <i className="fas fa-circle me-2 green"></i>
            <i 
              class="fas fa-trash-alt"
              onClick={() => setMarkdown('')}
            ></i>
          </div>
          <p className="mb-0 flex-grow-1 text-center topnav">Editor</p>
        </div>
        <textarea 
          id="editor"
          className="rounded-1 col-12 border-0 screen p-3"
          value={ markdown }
          rows="11"
          onChange={(e) => {setMarkdown(e.target.value)}}
        ></textarea>
      </form>
    </div>
   );
}
 
export default Editor;