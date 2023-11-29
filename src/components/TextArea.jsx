import $ from 'jquery';
import { marked } from 'marked';
import { useEffect } from 'react';

const TextArea = () => {

  useEffect(() => {
    const loadDefaultMarkdown = () => {
      const defaultMarkdown = 
      "# Markdown Previewer" +
      "\n" +
      "## A Project for freeCodeCamp" +
      "\n" +
      "\nThis is an inline code: `<p>Hello, World!</p>`" +
      "\n" +
      "\n```" +
      "\n// this is multi-line code:" +
      "\nconst App = () => { " +
      "\n  return ( " +
      "\n    <div>App</div>" +
      "\n  ) " +
      "\n} " +
      "\nexport default App" +
      "\n```" +
      "\n" +
      "\n" +      

      "\nThis is a **numbered list**: " +
      "\n1. First item" +
      "\n2. Second item" +
      "\n" +
      "\n> This is a block quote" +
      "\n" +
      "\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)" +
      "Coded by [jpzs444](https://github.com/jpzs444/markdown-previewer)"
      
      
      $('#editor').val(defaultMarkdown);
      $('#preview').html(marked.parse(defaultMarkdown));
    }

    loadDefaultMarkdown();
  }, [])

  const handleOnChange = (event) => {
    $('#preview').html(marked.parse(event.target.value))
    console.log($('#editor').val())
  }

  return (
    <div>
      <label htmlFor="editor">Editor</label>
      <textarea 
        id="editor" 
        name="editor" 
        rows={9} 
        onChange={handleOnChange}
      ></textarea>
    </div>
  )
}

export default TextArea