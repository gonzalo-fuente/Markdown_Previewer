import { marked } from "marked"

marked.setOptions({
  breaks: true
});

const Previewer = ({ markdown }) => {
  const renderer = new marked.Renderer();

  return ( 
    <div className="w-75 mx-auto shadow">
      <div className="bg-secondary d-flex align-items-center relative rounded-1">
        <div className="absolute">
          <i className="fas fa-circle ps-2 me-2 red"></i>
          <i className="fas fa-circle me-2 yellow"></i>
          <i className="fas fa-circle me-2 green"></i>
        </div>
        <p className="mb-0 flex-grow-1 text-center topnav">Previewer</p>
      </div>
      <div className="rounded-1 col-lg-12 border-0 screen p-3">
        <div id="preview" dangerouslySetInnerHTML={{
          __html: marked(markdown, {renderer: renderer})
        }}></div>
      </div>
    </div>
   );
}
 
export default Previewer;