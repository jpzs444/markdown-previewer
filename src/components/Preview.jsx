import $ from 'jquery';
import { useState, useEffect } from "react";
import { compress, expand } from "../assets"

const Preview = () => {
  const [isCompressed, setIsCompressed] = useState(true);

  const handlePreviewDisplay = (isCompressed) => {
    if (isCompressed) {
      $('#editor-component').css('display', 'block');
    } else {
      $('#editor-component').css('display', 'none');
    }
  }

  // For showing default display value of Editor
  useEffect(() => {
    handlePreviewDisplay(isCompressed);
  }, [isCompressed])

  // For updating display value of Editor
  const handleOnClick = () => {
    setIsCompressed(isCompressed => !isCompressed);
    handlePreviewDisplay(isCompressed);
  }

  return (
    <div id="preview-component">
      <div className="toolbar">
        <p className="preview-title">Preview</p>
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
      <div id="preview"></div>
    </div>
  )
}

export default Preview