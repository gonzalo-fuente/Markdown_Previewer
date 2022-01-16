import { useState } from "react";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

function App() {
  
  const initialMarkdown = `# React Markdown Previewer!

  ## The best you can find...
  
  Let's start with some text styles:
  **bold** / _italic_ / ~~strikethrough~~ 

  You can also use [links](https://github.com/gonzalo-fuente), and
  > Block Quotes!

  Now let's try some code, \`<div>Hello World</div>\`
  
  - What if you want to list todo's
    - Wake up.
    - Solve the markdown previewer exercise.
      \`\`\`
      const Editor = ({ markdown, setMarkdown}) => {
        return ( 
          <div>
            <form>
              <label>Editor</label>
              <textarea 
                id="editor" 
                value={ markdown }
                onChange={(e) => {setMarkdown(e.target.value)}}
              ></textarea>
            </form>
          </div>
         );
      } 
      \`\`\`
    - Go to Bed.
  
  And finally, learn from the best's...

  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `;

  const [markdown, setMarkdown] = useState(initialMarkdown);
  
  return (
    <div className="App container-fluid">
      <Editor markdown={ markdown } setMarkdown={ setMarkdown }/>
      <Previewer markdown={ markdown }/>    
    </div>
  );
}

export default App;