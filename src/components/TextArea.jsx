import $ from 'jquery';
import { marked } from 'marked';
import { useState, useEffect } from 'react';
import { expand, compress, editor } from '../assets';

marked.use({
  breaks: true
});

const TextArea = () => {
  const [isCompressed, setIsCompressed] = useState(true);

  const handlePreviewDisplay = (isCompressed) => {
    if (isCompressed) {
      $('#preview-component').css('display', 'block');
    } else {
      $('#preview-component').css('display', 'none');
    }
  }

  // For showing default display value of Preview
  useEffect(() => {
    handlePreviewDisplay(isCompressed);
  }, [isCompressed])

  // For updating display value of Preview
  const handleOnClick = () => {
    setIsCompressed(isCompressed => !isCompressed);
    handlePreviewDisplay(isCompressed);
  }

  console.log(isCompressed);

  // For showing default markdown on first load
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

  // For updating Preview when Editor value changes
  const handleOnChange = (event) => {
    $('#preview').html(marked.parse(event.target.value))
    console.log($('#editor').val())
  }

  return (
    <div id='editor-component'>
      <div className='toolbar'>
        <div className='toolbar__title'>
          <img src={editor} width={16}/>
          <label htmlFor='editor'>Editor</label>
        </div>
        <button 
          type='button' 
          className='toolbar__button'
          onClick={handleOnClick}
        >
          <img 
            src={isCompressed ? expand : compress}
            className='toolbar__button__img'
          />
        </button>
      </div>
      <textarea 
        id='editor' 
        name='editor' 
        onChange={handleOnChange}
      ></textarea>
    </div>
  )
}

export default TextArea